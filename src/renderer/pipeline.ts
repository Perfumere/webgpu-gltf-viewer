import vert from '../shaders/standard.vert.wgsl';
import frag from '../shaders/standard.frag.wgsl';

export default function createPipeline(
  device: GPUDevice,
  contextFormat: GPUTextureFormat,
  hasUV: boolean
) {
  function getVertexBufferLayout(
    shaderLocation: number,
    n: number
  ): GPUVertexBufferLayout {
    return {
      attributes: [
        {
          shaderLocation,
          offset: 0,
          format: `float32x${n}` as GPUVertexFormat,
        },
      ],
      arrayStride: 4 * n,
    };
  }
  const vertexBufferLayout = [
    getVertexBufferLayout(0, 3),
    getVertexBufferLayout(1, 3),
  ];
  if (hasUV) {
    vertexBufferLayout.push(getVertexBufferLayout(2, 2));
  }

  const bindGroupLayoutEntries: [GPUBindGroupLayoutEntry] = [
    {
      binding: 0,
      visibility: GPUShaderStage.VERTEX,
      buffer: {},
    },
  ];
  if (hasUV) {
    bindGroupLayoutEntries.push({
      binding: 1,
      visibility: GPUShaderStage.FRAGMENT,
      sampler: {},
    });
    bindGroupLayoutEntries.push({
      binding: 2,
      visibility: GPUShaderStage.FRAGMENT,
      texture: {},
    });
  }

  return device.createRenderPipeline({
    layout: device.createPipelineLayout({
      bindGroupLayouts: [
        device.createBindGroupLayout({
          entries: bindGroupLayoutEntries,
        }),
      ],
    }),
    vertex: {
      module: device.createShaderModule({
        code: vert(hasUV),
      }),
      entryPoint: 'main',
      buffers: vertexBufferLayout,
    },
    fragment: {
      module: device.createShaderModule({
        code: frag(hasUV),
      }),
      entryPoint: 'main',
      targets: [{ format: contextFormat }],
    },
    primitive: {
      topology: 'triangle-list',
      cullMode: 'back',
    },
    depthStencil: {
      depthWriteEnabled: true,
      depthCompare: 'less',
      format: 'depth24plus',
    },
  });
}