import { GLTF, loadGLTF } from '../loader/gltf';
import Scene from './scene';

const Stats = require('stats.js');

export class Renderer {
  canvas: HTMLCanvasElement;

  device: GPUDevice;

  context: GPUCanvasContext;

  contextFormat: GPUTextureFormat;

  renderPassDesc: GPURenderPassDescriptor;

  requestId: number | undefined;

  gltf?: GLTF;

  scene?: Scene;

  stats: any;

  constructor(
    canvas: HTMLCanvasElement,
    device: GPUDevice,
    context: GPUCanvasContext,
    contextFormat: GPUTextureFormat
  ) {
    this.canvas = canvas;
    this.device = device;
    this.context = context;
    this.contextFormat = contextFormat;

    let depthTexture = device.createTexture({
      size: [
        canvas.clientWidth * devicePixelRatio,
        canvas.clientHeight * devicePixelRatio,
      ],
      format: 'depth24plus',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    this.renderPassDesc = {
      colorAttachments: [],
      depthStencilAttachment: {
        view: depthTexture.createView(),
        depthLoadOp: 'clear',
        depthClearValue: 1.0,
        depthStoreOp: 'store',
        stencilClearValue: 0
      },
    };

    window.addEventListener('resize', () => {
      const size = [
        canvas.clientWidth * devicePixelRatio,
        canvas.clientHeight * devicePixelRatio,
      ];
      context.configure({ device, format: contextFormat, size });
      depthTexture.destroy();
      depthTexture = device.createTexture({
        size,
        format: 'depth24plus',
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
      this.renderPassDesc.depthStencilAttachment!.view =
        depthTexture.createView();
    });

    this.stats = new Stats();
    this.stats.showPanel(0);
    this.stats.dom.style.left = '';
    this.stats.dom.style.right = '0px';
    document.body.appendChild(this.stats.dom);
  }

  render() {
    const frame = () => {
      this.stats.begin();

      const commandEncoder = this.device.createCommandEncoder();
      this.renderPassDesc.colorAttachments = [
        {
          view: this.context.getCurrentTexture().createView(),
          clearValue: { r: 0.3, g: 0.5, b: 0.7, a: 1 },
          loadOp: 'clear',
          storeOp: 'store'
        },
      ];
      const passEncoder = commandEncoder.beginRenderPass(this.renderPassDesc);

      this.scene!.update(this.device, passEncoder);

      this.scene!.meshes.forEach((mesh) => {
        mesh.primitives.forEach((primitive) => {
          if (!primitive.isTransparent) {
            primitive.draw(passEncoder, mesh.matrices.length / 2);
          }
        });
      });
      this.scene!.meshes.forEach((mesh) => {
        mesh.primitives.forEach((primitive) => {
          if (primitive.isTransparent) {
            primitive.draw(passEncoder, mesh.matrices.length / 2);
          }
        });
      });

      passEncoder.end();
      this.device.queue.submit([commandEncoder.finish()]);

      this.stats.end();

      if (this.requestId !== undefined) {
        this.requestId = requestAnimationFrame(frame);
      }
    };

    this.requestId = requestAnimationFrame(frame);
  }

  async load(url: string) {
    this.gltf = await loadGLTF(url);

    if (this.requestId !== undefined) {
      cancelAnimationFrame(this.requestId);
    }

    this.scene?.destroy();
    this.scene = new Scene(
      this.gltf,
      this.gltf.defaultScene,
      this.canvas,
      this.device,
      this.contextFormat
    );

    this.render();
  }

  getCameraCount() {
    return this.scene ? this.scene.cameras.length : 0;
  }

  setCamera(index?: number) {
    if (this.scene) {
      if (index !== undefined) {
        this.scene.presetCamera = this.scene.cameras[index];
        this.scene.presetCamera.needUpdate = true;
      } else {
        this.scene.presetCamera = null;
        this.scene.userCamera.reset(this.scene.aabb);
      }
    }
  }
}

export async function createRenderer(canvas: HTMLCanvasElement) {
  const entry = navigator.gpu;
  if (!entry) throw new Error('WebGPU is not supported on this browser.');
  const adapter = await entry.requestAdapter();
  const device = await adapter!.requestDevice();
  const context = canvas.getContext('webgpu');
  const format = context!.getPreferredFormat(adapter!);
  context!.configure({
    device,
    format,
    size: [
      canvas.clientWidth * devicePixelRatio,
      canvas.clientHeight * devicePixelRatio,
    ],
    compositingAlphaMode: 'opaque'
  });
  return new Renderer(canvas, device, context!, format);
}
