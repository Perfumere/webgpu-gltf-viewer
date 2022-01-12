(()=>{var e={466:function(e){var t;e.exports=((t=function(){function e(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";r=e}var r=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),n(++r%i.children.length)}),!1);var a=(performance||Date).now(),s=a,o=0,l=e(new t.Panel("FPS","#0ff","#002")),c=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=e(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:i,addPanel:e,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(c.update(e-a,200),e>s+1e3&&(l.update(1e3*o/(e-s),100),s=e,o=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:n}}).Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,s=a(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,u=2*s,h=3*s,f=15*s,m=74*s,d=30*s,p=document.createElement("canvas");p.width=o,p.height=l,p.style.cssText="width:80px;height:48px";var v=p.getContext("2d");return v.font="bold "+9*s+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,o,l),v.fillStyle=t,v.fillText(e,c,u),v.fillRect(h,f,m,d),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(h,f,m,d),{dom:p,update:function(l,g){r=Math.min(r,l),i=Math.max(i,l),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,o,f),v.fillStyle=t,v.fillText(a(l)+" "+e+" ("+a(r)+"-"+a(i)+")",c,u),v.drawImage(p,h+s,f,m-s,d,h,f,m-s,d),v.fillRect(h+m-s,f,s,d),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(h+m-s,f,s,a((1-l/g)*d))}}},t)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";var e=1e-6,t="undefined"!=typeof Float32Array?Float32Array:Array;function r(){var e=new t(3);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function i(e,n,r){var i=new t(3);return i[0]=e,i[1]=n,i[2]=r,i}function a(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function s(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function o(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}function l(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function c(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function u(e,t,n){var r=t[0],i=t[1],a=t[2],s=n[0],o=n[1],l=n[2];return e[0]=i*l-a*o,e[1]=a*s-r*l,e[2]=r*o-i*s,e}function h(e,t,n){var r=t[0],i=t[1],a=t[2],s=n[3]*r+n[7]*i+n[11]*a+n[15];return s=s||1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/s,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/s,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/s,e}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});var f=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e};function m(){var e=new t(2);return t!=Float32Array&&(e[0]=0,e[1]=0),e}function d(e,n){var r=new t(2);return r[0]=e,r[1]=n,r}r();var p=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e};function v(){var e=new t(4);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}m(),function(){var e;e=new t(4),t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0)}();var g,x=function(e,n,r,i){var a=new t(4);return a[0]=e,a[1]=n,a[2]=r,a[3]=i,a},y=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e},b=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e};function w(e,t,n){return Math.min(Math.max(e,t),n)}function T(e,t=1){const n=void 0!==e?e:t;return Number.isInteger(n)?`${n}.0`:n}function M(e,t,n,r){switch(e){case 5120:return new Int8Array(t,n,r);case 5121:return new Uint8Array(t,n,r);case 5122:return new Int16Array(t,n,r);case 5123:return new Uint16Array(t,n,r);case 5125:return new Uint32Array(t,n,r);case 5126:return new Float32Array(t,n,r);default:throw new Error("invalid component type")}}function E(e){let t=0;e.forEach((e=>{t+=e.length}));const n=new Float32Array(t);return t=0,e.forEach((e=>{n.set(e,t),t+=e.length})),n}function P(e,t,n){const r=n.createBuffer({size:e.byteLength+3&-4,usage:t,mappedAtCreation:!0});let i;return i=e instanceof Int8Array?new Int8Array(r.getMappedRange()):e instanceof Uint8Array?new Uint8Array(r.getMappedRange()):e instanceof Int16Array?new Int16Array(r.getMappedRange()):e instanceof Uint16Array?new Uint16Array(r.getMappedRange()):e instanceof Uint32Array?new Uint32Array(r.getMappedRange()):new Float32Array(r.getMappedRange()),i.set(e),r.unmap(),r}function U(e){const{baseColorTexture:t,metallicRoughnessTexture:n}=e.pbrMetallicRoughness,{normalTexture:r,occlusionTexture:i,emissiveTexture:a}=e;return[t,n,r,i,a]}function S(e,t,n){return n<e?0:n>t?1:(n-e)/(t-e)}function A(e,t,n,s){let o=1;for(;o<e.length-1&&n>=e[o];)o+=1;const c=S(e[o-1],e[o],n);if("CUBICSPLINE"===s){const n=e[o]-e[o-1],s=c*c,u=s*c,h=9*o,f=i(t[h-6],t[h-5],t[h-4]),m=i(t[h-3],t[h-2],t[h-1]),d=i(t[h+3],t[h+4],t[h+5]),p=i(t[h],t[h+1],t[h+2]);l(f,f,2*u-3*s+1),l(m,m,n*(u-2*s+c)),l(d,d,-2*u+3*s),l(p,p,n*(u-s));const v=r();return a(v,v,f),a(v,v,m),a(v,v,d),a(v,v,p),v}const u=[];for(let e=-1;e<1;e+=1){const n=3*(o+e);u.push(i(t[n],t[n+1],t[n+2]))}return"STEP"===s?c<1?u[0]:u[1]:function(e,t,n,r){var i=t[0],a=t[1],s=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=s+r*(n[2]-s),e}(r(),u[0],u[1],c)}r(),i(1,0,0),i(0,1,0),v(),v(),g=new t(9),t!=Float32Array&&(g[1]=0,g[2]=0,g[3]=0,g[5]=0,g[6]=0,g[7]=0),g[0]=1,g[4]=1,g[8]=1;const C={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,5120:1,5121:1,5122:2,5123:2,5125:4,5126:4,9728:"nearest",9729:"linear",9984:"linear",9985:"linear",9986:"linear",9987:"linear",33071:"clamp-to-edge",33648:"mirror-repeat",10497:"repeat"};var B=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))};class R{constructor(e,t,n,a=0){var s;function o(e){return{magFilter:C[e.magFilter||9729],minFilter:C[e.minFilter||9729],addressModeU:C[e.wrapS||10497],addressModeV:C[e.wrapT||10497]}}this.scenes=e.scenes,this.defaultScene=e.scene||0,this.nodes=e.nodes,this.cameras=e.cameras||[],this.images=n;const h=e.samplers?e.samplers.map((e=>o(e))):[],v=o({}),g=e.textures?e.textures.map((e=>(e.sampler=void 0!==e.sampler?h[e.sampler]:v,e))):[],x=e.materials?e.materials.map((e=>(e.pbrMetallicRoughness||(e.pbrMetallicRoughness={}),U(e).forEach((e=>{e&&(e.source=g[e.index].source,e.sampler=g[e.index].sampler)})),e))):[],y={pbrMetallicRoughness:{}};function b(n,r){const i=e.bufferViews[n.bufferView],s=(i.byteOffset||0)+(n.byteOffset||0),o=Math.max(i.byteStride/4||0,r);let l=M(n.componentType,t[i.buffer],0===i.buffer?s+a:s,(n.count-1)*o+r);if(o>r){const e=new(0,l.constructor)(n.count*r);for(let t=0,n=0;t<e.length;t+=r,n+=o)for(let i=0;i<r;i+=1)e[t+i]=l[n+i];l=e}return l}const w=e.accessors.map((e=>{const t=C[e.type];let n;if(n=void 0===e.bufferView?M(e.componentType,new ArrayBuffer(t*e.count*C[e.componentType]),0,e.count*t):b(e,t),e.sparse){e.sparse.indices.count=e.sparse.count,e.sparse.values.count=e.sparse.count,e.sparse.values.componentType=e.componentType;const r=b(e.sparse.indices,1),i=b(e.sparse.values,t);for(let a=0;a<e.sparse.count;a+=1)for(let e=0;e<t;e+=1)n[r[a]*t+e]=i[a*t+e]}return n}));this.meshes=e.meshes.map((t=>t.primitives.map((t=>{const n=void 0!==t.material?x[t.material]:y;let a,s=null;void 0!==t.indices?(s=function(e){if(e instanceof Uint16Array||e instanceof Uint32Array)return e;let t;return t=e instanceof Float32Array?new Uint32Array(e.length):new Uint16Array(e.length),e.forEach(((e,n)=>{t[n]=e})),t}(w[t.indices]),a=e.accessors[t.indices].count):a=e.accessors[t.attributes.POSITION].count;const o=w[t.attributes.POSITION],{max:h,min:v}=e.accessors[t.attributes.POSITION],g={max:h,min:v};let b;b=void 0!==t.attributes.NORMAL?w[t.attributes.NORMAL]:function(e,t){const n=new Float32Array(t.length),a=e?e.length:t.length;for(let s=0;s<a;s+=3){const a=[];for(let t=0;t<3;t+=1)e?a.push(e[s+t]):a.push(s+t);const o=a.map((e=>{const n=3*e;return i(t[n],t[n+1],t[n+2])})),l=r();f(l,o[1],o[0]);const h=r();f(h,o[2],o[0]);const m=r();u(m,c(l,l),c(l,h));for(let e=0;e<3;e+=1){const t=3*(s+e);for(let e=0;e<3;e+=1)n[t+e]+=m[e]}}return n}(s,o);let T=null;void 0!==t.attributes.TEXCOORD_0&&(T=w[t.attributes.TEXCOORD_0]);let M=null;void 0!==t.attributes.TEXCOORD_1&&(M=w[t.attributes.TEXCOORD_1]);let E=null;void 0!==t.attributes.TANGENT&&void 0!==t.attributes.NORMAL?E=w[t.attributes.TANGENT]:n.normalTexture&&(E=function(e,t,n,a){const s=new Float32Array(n.length/3*4),o=e?e.length:t.length;for(let n=0;n<o;n+=3){const o=[];for(let t=0;t<3;t+=1)e?o.push(e[n+t]):o.push(n+t);const u=o.map((e=>{const n=3*e;return i(t[n],t[n+1],t[n+2])})),h=o.map((e=>{const t=2*e;return d(a[t],a[t+1])})),v=r();f(v,u[1],u[0]);const g=r();f(g,u[2],u[0]);const x=m();p(x,h[1],h[0]);const y=m();p(y,h[2],h[0]);const b=r();f(b,l(v,v,y[1]),l(g,g,x[1])),l(b,b,y[1]*x[0]-x[1]*y[0]),c(b,b);for(let e=0;e<3;e+=1){const t=4*(n+e);for(let e=0;e<3;e+=1)s[t+e]+=b[e];s[t+3]=1}}return s}(s,o,b,T));let P=null;return void 0!==t.attributes.COLOR_0&&(P=w[t.attributes.COLOR_0]),{vertexCount:a,indices:s,positions:o,normals:b,uvs:T,uv1s:M,tangents:E,colors:P,material:n,boundingBox:g}})))),this.animations=(null===(s=e.animations)||void 0===s?void 0:s.map((e=>{const t=e.channels.map((({sampler:t,target:n})=>({input:w[e.samplers[t].input],output:w[e.samplers[t].output],interpolation:e.samplers[t].interpolation||"LINEAR",node:n.node,path:n.path}))),n=t.reduce(((e,{input:t})=>Math.max(e,t[t.length-1])),0);return{channels:t,length:n}})))||[]}}function $(e,t,n,r=0){return B(this,void 0,void 0,(function*(){const i=t.substring(0,t.lastIndexOf("/")),a=[];let s=Promise.resolve();e.images&&(s=Promise.all(e.images.map(((e,t)=>B(this,void 0,void 0,(function*(){if(e.uri){const n="data:"===e.uri.slice(0,5)?e.uri:`${i}/${e.uri}`;a[t]=yield fetch(n).then((e=>e.blob())).then((e=>createImageBitmap(e,{colorSpaceConversion:"none"})))}}))))));const o=[];yield Promise.all(e.buffers.map(((e,t)=>{if(!e.uri){if(0!==t)throw new Error("buffer uri undefined");return o[t]=n,Promise.resolve()}const r="data:"===e.uri.slice(0,5)?e.uri:`${i}/${e.uri}`;return fetch(r).then((e=>e.arrayBuffer())).then((e=>{o[t]=e}))})));let l=Promise.resolve();return e.images&&(l=Promise.all(e.images.map(((t,n)=>B(this,void 0,void 0,(function*(){if(void 0!==t.bufferView){const{buffer:i,byteOffset:s,byteLength:l}=e.bufferViews[t.bufferView],c=new Uint8Array(o[i],0===i?s+r:s,l);let u;u=t.mimeType?t.mimeType:255===c[0]?"image/jpeg":"image/png";const h=new Blob([c],{type:u});a[n]=yield createImageBitmap(h,{colorSpaceConversion:"none"})}})))))),yield Promise.all([s,l]),new R(e,o,a,r)}))}function F(e,t){const n=null!==e.uvs,r=null!==e.uv1s,i=null!==e.tangents,a=null!==e.colors;let s=1,o=1;return`\n\n  [[block]] struct Camera\n  {\n      projView: mat4x4<f32>;\n  };\n  [[group(0), binding(0)]] var<uniform> camera: Camera;\n\n  struct Model {\n      matrix: mat4x4<f32>;\n      invTr: mat4x4<f32>;\n  };\n  [[block]] struct Models\n  {\n      model: [[stride(128)]] array<Model, ${t}>;\n  };\n  [[group(1), binding(0)]] var<uniform> models: Models;\n\n  struct VertexOutput\n  {\n      [[builtin(position)]] position: vec4<f32>;\n      [[location(0)]] normal: vec3<f32>;\n      [[location(1)]] worldPos: vec3<f32>;\n      ${n?`[[location(${o+=1})]] uv: vec2<f32>; /* wgsl */`:""}\n      ${r?`[[location(${o+=1})]] uv1: vec2<f32>; /* wgsl */`:""}\n      ${i?`[[location(${o+=1})]] tangent: vec3<f32>;\n             [[location(${o+=1})]] bitangent: vec3<f32>; /* wgsl */`:""}\n      ${a?`[[location(${o+=1})]] color: vec4<f32>; /* wgsl */`:""}\n  };\n\n  [[stage(vertex)]]\n  fn main([[builtin(instance_index)]] instanceIndex : u32,\n          [[location(0)]] pos: vec3<f32>,\n          [[location(1)]] normal: vec3<f32>,\n          ${n?`[[location(${s+=1})]] uv: vec2<f32>, /* wgsl */`:""}\n          ${r?`[[location(${s+=1})]] uv1: vec2<f32>, /* wgsl */`:""}\n          ${i?`[[location(${s+=1})]] tangent: vec4<f32>, /* wgsl */`:""}\n          ${a?`[[location(${s+=1})]] color: vec4<f32>, /* wgsl */`:""}) -> VertexOutput\n  {\n      let model = models.model[instanceIndex];\n      var v: VertexOutput;\n      v.position = camera.projView * model.matrix * vec4<f32>(pos, 1.0);\n      v.normal = normalize((model.invTr * vec4<f32>(normal, 0.0)).xyz);\n      v.worldPos = (model.matrix * vec4<f32>(pos, 1.0)).xyz;\n      ${n?"v.uv = uv;":""}\n      ${r?"v.uv1 = uv1;":""}\n      ${i?"v.tangent = normalize((model.matrix * vec4<f32>(tangent.xyz, 0.0)).xyz);\n             v.bitangent = cross(v.normal, v.tangent) * tangent.w; /* wgsl */":""}\n      ${a?"v.color = color;":""}\n      return v;\n  }`}function I(e,t){const n=null!==e.uvs,r=null!==e.uv1s,i=null!==e.tangents,a=null!==e.colors,{baseColorTexture:s,metallicRoughnessTexture:o,metallicFactor:l,roughnessFactor:c}=t.pbrMetallicRoughness,{normalTexture:u,occlusionTexture:h,emissiveTexture:f}=t;let{baseColorFactor:m}=t.pbrMetallicRoughness;m=m||[1,1,1,1];let{emissiveFactor:d}=t;d=d||[0,0,0];const p=(null==s?void 0:s.texCoord)||"",v=(null==o?void 0:o.texCoord)||"",g=(null==u?void 0:u.texCoord)||"",x=(null==h?void 0:h.texCoord)||"",y=(null==f?void 0:f.texCoord)||"";let b=1;return`\n\n  [[block]] struct Camera\n  {\n      eye: vec3<f32>;\n  };\n  [[group(0), binding(1)]] var<uniform> camera: Camera;\n\n  ${s?"[[group(1), binding(1)]] var texSampler: sampler;\n         [[group(1), binding(2)]] var tex: texture_2d<f32>; /* wgsl */":""}\n  ${o?"[[group(1), binding(3)]] var metalRoughSampler: sampler;\n         [[group(1), binding(4)]] var metalRoughTex: texture_2d<f32>; /* wgsl */":""}\n  ${u?"[[group(1), binding(5)]] var normalSampler: sampler;\n         [[group(1), binding(6)]] var normalTex: texture_2d<f32>; /* wgsl */":""}\n  ${h?"[[group(1), binding(7)]] var occlusionSampler: sampler;\n         [[group(1), binding(8)]] var occlusionTex: texture_2d<f32>; /* wgsl */":""}\n  ${f?"[[group(1), binding(9)]] var emissiveSampler: sampler;\n         [[group(1), binding(10)]] var emissiveTex: texture_2d<f32>; /* wgsl */":""}\n\n  fn linearSample(texture: texture_2d<f32>, texSampler: sampler, uv: vec2<f32>) -> vec4<f32>\n  {\n    let color = textureSample(texture, texSampler, uv);\n    return vec4<f32>(pow(color.rgb, vec3<f32>(2.2)), color.a);\n  }\n\n  let pi: f32 = 3.141592653589793;\n\n  fn blinnPhong(color: vec3<f32>,\n           l: vec3<f32>,\n           v: vec3<f32>,\n           n: vec3<f32>) -> vec3<f32>\n  {\n      let specExp = 64.0;\n      let intensity = 0.5;\n      let ambient = 0.5;\n\n      let diffuse = max(dot(n, l), 0.0);\n      let specular = pow(max(dot(n, normalize(l + v)), 0.0), specExp);\n\n      return color * ((diffuse + specular) * intensity + ambient);\n  }\n\n  fn brdf(color: vec3<f32>,\n          metallic: f32,\n          roughness: f32,\n          l: vec3<f32>,\n          v: vec3<f32>,\n          n: vec3<f32>) -> vec3<f32>\n  {\n      let h = normalize(l + v);\n      let ndotl = clamp(dot(n, l), 0.0, 1.0);\n      let ndotv = abs(dot(n, v));\n      let ndoth = clamp(dot(n, h), 0.0, 1.0);\n      let vdoth = clamp(dot(v, h), 0.0, 1.0);\n\n      let f0 = vec3<f32>(0.04);\n      let diffuseColor = color * (1.0 - f0) * (1.0 - metallic);\n      let specularColor = mix(f0, color, metallic);\n\n      let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n      let reflectance0 = specularColor;\n      let reflectance9 = vec3<f32>(clamp(reflectance * 25.0, 0.0, 1.0));\n      let f = reflectance0 + (reflectance9 - reflectance0) * pow(1.0 - vdoth, 5.0);\n\n      let r2 = roughness * roughness;\n      let r4 = r2 * r2;\n      let attenuationL = 2.0 * ndotl / (ndotl + sqrt(r4 + (1.0 - r4) * ndotl * ndotl));\n      let attenuationV = 2.0 * ndotv / (ndotv + sqrt(r4 + (1.0 - r4) * ndotv * ndotv));\n      let g = attenuationL * attenuationV;\n\n      let temp = ndoth * ndoth * (r2 - 1.0) + 1.0;\n      let d = r2 / (pi * temp * temp);\n\n      let diffuse = (1.0 - f) / pi * diffuseColor;\n      let specular = max(f * g * d / (4.0 * ndotl * ndotv), vec3<f32>(0.0));\n      return ndotl * (diffuse + specular) * 2.0 + color * 0.1;\n  }\n\n  [[stage(fragment)]]\n  fn main([[location(0)]] vNormal: vec3<f32>,\n          [[location(1)]] worldPos: vec3<f32>,\n          ${n?`[[location(${b+=1})]] uv: vec2<f32>, /* wgsl */`:""}\n          ${r?`[[location(${b+=1})]] uv1: vec2<f32>, /* wgsl */`:""}\n          ${i?`[[location(${b+=1})]] tangent: vec3<f32>,\n                 [[location(${b+=1})]] bitangent: vec3<f32>, /* wgsl */`:""}\n          ${a?`[[location(${b+=1})]] vColor: vec4<f32>, /* wgsl */`:""}) -> [[location(0)]] vec4<f32>\n  {\n      let lightDir = normalize(vec3<f32>(2.0, 4.0, 3.0));\n\n      var color = vec4<f32>(${T(m[0])},\n                            ${T(m[1])},\n                            ${T(m[2])},\n                            ${T(m[3])});\n      ${s?`color = color * linearSample(tex, texSampler, uv${p}); /* wgsl */`:""}\n      ${a?"color = color * vColor;":""}\n\n      ${"MASK"===t.alphaMode?`if (color.a < ${T(t.alphaCutoff,.5)})\n             {\n               discard;\n             } /* wgsl */`:""}\n\n      var metallic: f32 = ${T(l)};\n      var roughness: f32 = ${T(c)};\n      ${o?`let metalRough = textureSample(metalRoughTex, metalRoughSampler, uv${v});\n             metallic = metallic * metalRough.b;\n             roughness = roughness * metalRough.g; /* wgsl */`:""}\n      roughness = clamp(roughness, 0.04, 1.0);\n\n      ${u?`var normal = textureSample(normalTex, normalSampler, uv${g}).rgb;\n             normal = normal * 2.0 - 1.0;\n             normal.x = normal.x * ${T(u.scale)};\n             normal.y = normal.y * ${T(u.scale)};\n             normal = normal.x * tangent + normal.y * bitangent + normal.z * vNormal;\n             normal = normalize(normal); /* wgsl */`:"var normal = normalize(vNormal); /* wgsl */"}\n\n      ${h?`var ao = textureSample(occlusionTex, occlusionSampler, uv${x}).r;\n             ao = 1.0 + ${T(h.strength)} * (ao - 1.0);\n             /* wgsl */`:"let ao = 1.0;"}\n      var emissive = vec3<f32>(${T(d[0])},\n                               ${T(d[1])},\n                               ${T(d[2])});\n      ${f?`emissive = emissive * linearSample(emissiveTex, emissiveSampler, uv${y}).rgb; /* wgsl */`:""}\n\n      let viewDir = normalize(camera.eye - worldPos);\n      ${t.doubleSided?"if (dot(normal, viewDir) < 0.0)\n             {\n               normal = -normal;\n             } /* wgsl */":""}\n\n      var rgb = brdf(color.rgb, metallic, roughness, lightDir, viewDir, normal) * ao + emissive;\n      rgb = pow(rgb, vec3<f32>(1.0 / 2.2));\n      return vec4<f32>(rgb, color.a);\n  }`}class V{constructor(e,t){this.isTransparent=!1,this.vertexCount=e.vertexCount,this.indexFormat=e.indices instanceof Uint16Array?"uint16":"uint32",this.positions=P(e.positions,GPUBufferUsage.VERTEX,t),this.normals=P(e.normals,GPUBufferUsage.VERTEX,t),this.indices=e.indices?P(e.indices,GPUBufferUsage.INDEX,t):null,this.uvs=e.uvs?P(e.uvs,GPUBufferUsage.VERTEX,t):null,this.uv1s=e.uv1s?P(e.uv1s,GPUBufferUsage.VERTEX,t):null,this.tangents=e.tangents?P(e.tangents,GPUBufferUsage.VERTEX,t):null,this.colors=e.colors?P(e.colors,GPUBufferUsage.VERTEX,t):null}draw(e,t){if(t){e.setPipeline(this.pipeline),e.setVertexBuffer(0,this.positions),e.setVertexBuffer(1,this.normals);let n=2;this.uvs&&(e.setVertexBuffer(n,this.uvs),n+=1),this.uv1s&&(e.setVertexBuffer(n,this.uv1s),n+=1),this.tangents&&(e.setVertexBuffer(n,this.tangents),n+=1),this.colors&&(e.setVertexBuffer(n,this.colors),n+=1),e.setBindGroup(1,this.uniformBindGroup),this.indices?(e.setIndexBuffer(this.indices,this.indexFormat),e.drawIndexed(this.vertexCount,t)):e.draw(this.vertexCount,t)}}destroy(){var e,t,n,r;null===(e=this.indices)||void 0===e||e.destroy(),this.positions.destroy(),this.normals.destroy(),null===(t=this.uvs)||void 0===t||t.destroy(),null===(n=this.uv1s)||void 0===n||n.destroy(),null===(r=this.tangents)||void 0===r||r.destroy()}}function G(){var e=new t(16);return t!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function O(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],d=t[12],p=t[13],v=t[14],g=t[15],x=n*o-r*s,y=n*l-i*s,b=n*c-a*s,w=r*l-i*o,T=r*c-a*o,M=i*c-a*l,E=u*p-h*d,P=u*v-f*d,U=u*g-m*d,S=h*v-f*p,A=h*g-m*p,C=f*g-m*v,B=x*C-y*A+b*S+w*U-T*P+M*E;return B?(B=1/B,e[0]=(o*C-l*A+c*S)*B,e[1]=(i*A-r*C-a*S)*B,e[2]=(p*M-v*T+g*w)*B,e[3]=(f*T-h*M-m*w)*B,e[4]=(l*U-s*C-c*P)*B,e[5]=(n*C-i*U+a*P)*B,e[6]=(v*b-d*M-g*y)*B,e[7]=(u*M-f*b+m*y)*B,e[8]=(s*A-o*U+c*E)*B,e[9]=(r*U-n*A-a*E)*B,e[10]=(d*T-p*b+g*x)*B,e[11]=(h*b-u*T-m*x)*B,e[12]=(o*P-s*S-l*E)*B,e[13]=(n*S-r*P+i*E)*B,e[14]=(p*y-d*w-v*x)*B,e[15]=(u*w-h*y+f*x)*B,e):null}function L(e,t){var n=t[0],r=t[1],i=t[2],a=t[4],s=t[5],o=t[6],l=t[8],c=t[9],u=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(a,s,o),e[2]=Math.hypot(l,c,u),e}function N(e,t,n,r){var i=t[0],a=t[1],s=t[2],o=t[3],l=i+i,c=a+a,u=s+s,h=i*l,f=i*c,m=i*u,d=a*c,p=a*u,v=s*u,g=o*l,x=o*c,y=o*u,b=r[0],w=r[1],T=r[2];return e[0]=(1-(d+v))*b,e[1]=(f+y)*b,e[2]=(m-x)*b,e[3]=0,e[4]=(f-y)*w,e[5]=(1-(h+v))*w,e[6]=(p+g)*w,e[7]=0,e[8]=(m+x)*T,e[9]=(p-g)*T,e[10]=(1-(h+d))*T,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}var D=function(e,t,n,r,i){var a,s=1/Math.tan(t/2);return e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=i&&i!==1/0?(a=1/(r-i),e[10]=(i+r)*a,e[14]=2*i*r*a):(e[10]=-1,e[14]=-2*r),e},z=function(e,t,n){var r=t[0],i=t[1],a=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=t[9],m=t[10],d=t[11],p=t[12],v=t[13],g=t[14],x=t[15],y=n[0],b=n[1],w=n[2],T=n[3];return e[0]=y*r+b*o+w*h+T*p,e[1]=y*i+b*l+w*f+T*v,e[2]=y*a+b*c+w*m+T*g,e[3]=y*s+b*u+w*d+T*x,y=n[4],b=n[5],w=n[6],T=n[7],e[4]=y*r+b*o+w*h+T*p,e[5]=y*i+b*l+w*f+T*v,e[6]=y*a+b*c+w*m+T*g,e[7]=y*s+b*u+w*d+T*x,y=n[8],b=n[9],w=n[10],T=n[11],e[8]=y*r+b*o+w*h+T*p,e[9]=y*i+b*l+w*f+T*v,e[10]=y*a+b*c+w*m+T*g,e[11]=y*s+b*u+w*d+T*x,y=n[12],b=n[13],w=n[14],T=n[15],e[12]=y*r+b*o+w*h+T*p,e[13]=y*i+b*l+w*f+T*v,e[14]=y*a+b*c+w*m+T*g,e[15]=y*s+b*u+w*d+T*x,e};class j{constructor(e,t,n,i){this.eye=r(),this.view=G(),this.proj=G(),this.projView=G(),this.needUpdate=!0,this.projViewBuffer=e,this.eyeBuffer=t,this.bindGroup=n,this.canvas=i,window.addEventListener("resize",(()=>{const e=i.clientWidth/i.clientHeight;void 0===this.ymag?this.proj[0]=1/(Math.tan(this.yfov/2)*e):this.proj[0]=1/(this.ymag*e),this.needUpdate=!0}))}update(e,t){if(this.needUpdate){this.updateView(),z(this.projView,this.proj,this.view);const t=this.projView;e.queue.writeBuffer(this.projViewBuffer,0,t.buffer,t.byteOffset,t.byteLength);const n=this.eye;e.queue.writeBuffer(this.eyeBuffer,0,n.buffer,n.byteOffset,n.byteLength),this.needUpdate=!1}t.setBindGroup(0,this.bindGroup)}destroy(){this.projViewBuffer.destroy(),this.eyeBuffer.destroy()}}class q extends j{constructor(e,t,n,r,i,a){super(e,t,n,r),this.globalTransform=i;const s=r.clientWidth/r.clientHeight;if("perspective"===a.type){const{yfov:e,zfar:t,znear:n}=a.perspective;this.yfov=e,D(this.proj,e,s,n,t||1/0)}else{const{ymag:e,zfar:t,znear:n}=a.orthographic;this.ymag=e,this.proj[0]=1/(e*s),this.proj[5]=1/e,this.proj[10]=1/(n-t),this.proj[14]=n/(n-t)}}updateView(){this.eye=r(),h(this.eye,this.eye,this.globalTransform),O(this.view,this.globalTransform)}}class _{constructor(e,n,a){this.translation=r(),this.rotation=v(),this.scale=i(1,1,1),this.globalTransform=G(),this.children=[],this.parent=a,this.index=n;const s=e[n];s&&(s.matrix&&(function(e,t){e[0]=t[12],e[1]=t[13],e[2]=t[14]}(this.translation,s.matrix),function(e,n){var r=new t(3);L(r,n);var i=1/r[0],a=1/r[1],s=1/r[2],o=n[0]*i,l=n[1]*a,c=n[2]*s,u=n[4]*i,h=n[5]*a,f=n[6]*s,m=n[8]*i,d=n[9]*a,p=n[10]*s,v=o+h+p,g=0;v>0?(g=2*Math.sqrt(v+1),e[3]=.25*g,e[0]=(f-d)/g,e[1]=(m-c)/g,e[2]=(l-u)/g):o>h&&o>p?(g=2*Math.sqrt(1+o-h-p),e[3]=(f-d)/g,e[0]=.25*g,e[1]=(l+u)/g,e[2]=(m+c)/g):h>p?(g=2*Math.sqrt(1+h-o-p),e[3]=(m-c)/g,e[0]=(l+u)/g,e[1]=.25*g,e[2]=(f+d)/g):(g=2*Math.sqrt(1+p-o-h),e[3]=(l-u)/g,e[0]=(m+c)/g,e[1]=(f+d)/g,e[2]=.25*g)}(this.rotation,s.matrix),L(this.scale,s.matrix),this.matrix=s.matrix),s.translation&&(this.translation=s.translation),s.rotation&&(this.rotation=s.rotation),s.scale&&(this.scale=s.scale)),this.matrix?this.globalTransform=function(e){var n=new t(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}(this.matrix):N(this.globalTransform,this.rotation,this.translation,this.scale),a&&z(this.globalTransform,a.globalTransform,this.globalTransform),s&&(this.mesh=s.mesh,s.children&&(this.children=s.children.map((t=>new _(e,t,this)))))}getAABB(e){const t={max:i(-1/0,-1/0,-1/0),min:i(1/0,1/0,1/0)};if(this.children.forEach((n=>{const r=n.getAABB(e);o(t.max,t.max,r.max),s(t.min,t.min,r.min)})),void 0!==this.mesh){const n={max:i(-1/0,-1/0,-1/0),min:i(1/0,1/0,1/0)};e[this.mesh].forEach((e=>{o(n.max,n.max,e.boundingBox.max),s(n.min,n.min,e.boundingBox.min)}));for(let e=0;e<8;e+=1){const r=i(e%8<4?n.min[0]:n.max[0],e%4<2?n.min[1]:n.max[1],e%2<1?n.min[2]:n.max[2]);h(r,r,this.globalTransform),o(t.max,t.max,r),s(t.min,t.min,r)}}return t}createCameras(e,t,n,r,i,a){this.index>=0&&void 0!==t.nodes[this.index].camera&&(this.camera=new q(n,r,i,a,this.globalTransform,t.cameras[t.nodes[this.index].camera]),e.push(this.camera)),this.children.forEach((s=>s.createCameras(e,t,n,r,i,a)))}passMatrices(e){if(void 0!==this.mesh){const t=G();O(t,this.globalTransform),function(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],a=t[6],s=t[7],o=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=s,e[14]=o}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15]}(t,t),e[this.mesh].matrices.push(this.globalTransform),e[this.mesh].matrices.push(t)}this.children.forEach((t=>{t.passMatrices(e)}))}animate(t,n,r=!1){let i,a,s,o=!1;t.forEach((({channels:t,length:r})=>{t.forEach((({node:t,path:o,input:l,output:c,interpolation:u})=>{if(t===this.index){const t=n%r;switch(o){case"translation":i=A(l,c,t,u);break;case"rotation":a=function(t,n,r,i){let a=1;for(;a<t.length-1&&r>=t[a];)a+=1;const s=S(t[a-1],t[a],r);if("CUBICSPLINE"===i){const e=t[a]-t[a-1],r=s*s,i=r*s,o=12*a,l=x(n[o-8],n[o-7],n[o-6],n[o-5]),c=x(n[o-4],n[o-3],n[o-2],n[o-1]),u=x(n[o+4],n[o+5],n[o+6],n[o+7]),h=x(n[o],n[o+1],n[o+2],n[o+3]);b(l,l,2*i-3*r+1),b(c,c,e*(i-2*r+s)),b(u,u,-2*i+3*r),b(h,h,e*(i-r));const f=x(0,0,0,0);return y(f,f,l),y(f,f,c),y(f,f,u),y(f,f,h),function(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],s=n*n+r*r+i*i+a*a;return s>0&&(s=1/Math.sqrt(s)),e[0]=n*s,e[1]=r*s,e[2]=i*s,e[3]=a*s,e}(f,f)}const o=[];for(let e=-1;e<1;e+=1){const t=4*(a+e);o.push(x(n[t],n[t+1],n[t+2],n[t+3]))}return"STEP"===i?s<1?o[0]:o[1]:function(t,n,r,i){var a,s,o,l,c,u=n[0],h=n[1],f=n[2],m=n[3],d=r[0],p=r[1],v=r[2],g=r[3];return(s=u*d+h*p+f*v+m*g)<0&&(s=-s,d=-d,p=-p,v=-v,g=-g),1-s>e?(a=Math.acos(s),o=Math.sin(a),l=Math.sin((1-i)*a)/o,c=Math.sin(i*a)/o):(l=1-i,c=i),t[0]=l*u+c*d,t[1]=l*h+c*p,t[2]=l*f+c*v,t[3]=l*m+c*g,t}(v(),o[0],o[1],s)}(l,c,t,u);break;case"scale":s=A(l,c,t,u)}}}))})),(r||i||a||s)&&(z(this.globalTransform,this.parent.globalTransform,N(this.globalTransform,a||this.rotation,i||this.translation,s||this.scale)),o=!0,this.camera&&(this.camera.globalTransform=this.globalTransform,this.camera.needUpdate=!0)),this.children.forEach((e=>{e.animate(t,n,o)}))}}const H=i(0,1,0);class X extends j{constructor(e,t,n,i,a){super(e,t,n,i),this.radius=3,this.theta=0,this.phi=0,this.center=r(),this.mousePressed=!1,this.canvas=i,this.reset(a);let s=!1;i.onmousedown=e=>{e.preventDefault(),s=!0},i.onmouseup=e=>{e.preventDefault(),s=!1},i.onmousemove=e=>{e.preventDefault(),s&&(this.theta-=e.movementX/window.innerWidth*Math.PI*2,this.phi=w(this.phi-e.movementY/window.innerHeight*Math.PI,-Math.PI/2+.1,Math.PI/2-.1),this.needUpdate=!0)}}reset(e){this.center=r(),l(this.center,a(this.center,e.max,e.min),.5);const t=r(),n=(i=f(t,e.max,e.min),s=i[0],o=i[1],c=i[2],Math.hypot(s,o,c));var i,s,o,c;this.radius=n,this.theta=0,this.phi=0,this.yfov=Math.PI/3;const u=this.canvas.clientWidth/this.canvas.clientHeight;D(this.proj,this.yfov,u,n/100,1/0),this.canvas.onwheel=e=>{e.preventDefault(),this.radius=w(this.radius+.001*e.deltaY*n,n/16,1/0),this.needUpdate=!0},this.needUpdate=!0}updateView(){this.eye=i(this.center[0],this.center[1],this.center[2]+this.radius),function(e,t,n,r){var i=[],a=[];i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2]}(this.eye,this.eye,this.center,this.phi),function(e,t,n,r){var i=[],a=[];i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2]}(this.eye,this.eye,this.center,this.theta),function(t,n,r,i){var a,s,o,l,c,u,h,f,m,d,p=n[0],v=n[1],g=n[2],x=i[0],y=i[1],b=i[2],w=r[0],T=r[1],M=r[2];Math.abs(p-w)<e&&Math.abs(v-T)<e&&Math.abs(g-M)<e?function(e){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1}(t):(h=p-w,f=v-T,m=g-M,a=y*(m*=d=1/Math.hypot(h,f,m))-b*(f*=d),s=b*(h*=d)-x*m,o=x*f-y*h,(d=Math.hypot(a,s,o))?(a*=d=1/d,s*=d,o*=d):(a=0,s=0,o=0),l=f*o-m*s,c=m*a-h*o,u=h*s-f*a,(d=Math.hypot(l,c,u))?(l*=d=1/d,c*=d,u*=d):(l=0,c=0,u=0),t[0]=a,t[1]=l,t[2]=h,t[3]=0,t[4]=s,t[5]=c,t[6]=f,t[7]=0,t[8]=o,t[9]=u,t[10]=m,t[11]=0,t[12]=-(a*p+s*v+o*g),t[13]=-(l*p+c*v+u*g),t[14]=-(h*p+f*v+m*g),t[15]=1)}(this.view,this.eye,this.center,H)}}class W{constructor(e,t,n,r,i){this.cameras=[],this.presetCamera=null,this.root=new _(e.nodes,-1,null),this.root.children=e.scenes[t].nodes.map((t=>new _(e.nodes,t,this.root))),this.aabb=this.root.getAABB(e.meshes);const a=r.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),s=r.createBuffer({size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),o=r.createBindGroup({layout:r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{}}]}),entries:[{binding:0,resource:{buffer:a}},{binding:1,resource:{buffer:s}}]});this.userCamera=new X(a,s,o,n,this.aabb),this.root.createCameras(this.cameras,e,a,s,o,n),this.meshes=e.meshes.map((e=>({matrices:[],matrixBuffer:void 0,primitives:e.map((e=>new V(e,r)))}))),this.root.passMatrices(this.meshes),this.textures=e.images.map((e=>{const t=r.createTexture({size:[e.width,e.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return r.queue.copyExternalImageToTexture({source:e},{texture:t},[e.width,e.height]),t})),this.meshes.forEach(((t,n)=>{t.matrices.length&&(t.matrixBuffer=P(E(t.matrices),GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,r),t.primitives.forEach(((a,s)=>{const{material:o}=e.meshes[n][s];a.isTransparent="BLEND"===o.alphaMode,a.pipeline=function(e,t,n,r,i){let a=-1;function s(e){return a+=1,{attributes:[{shaderLocation:a,offset:0,format:`float32x${e}`}],arrayStride:4*e}}const o=[s(3),s(3)];null!==r.uvs&&o.push(s(2)),null!==r.uv1s&&o.push(s(2)),null!==r.tangents&&o.push(s(4)),null!==r.colors&&o.push(s(4));const l=[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}}];return U(n).forEach(((e,t)=>{e&&(l.push({binding:2*t+1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}),l.push({binding:2*t+2,visibility:GPUShaderStage.FRAGMENT,texture:{}}))})),e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{}}]}),e.createBindGroupLayout({entries:l})]}),vertex:{module:e.createShaderModule({code:F(r,i)}),entryPoint:"main",buffers:o},fragment:{module:e.createShaderModule({code:I(r,n)}),entryPoint:"main",targets:[{format:t,blend:{color:"BLEND"!==n.alphaMode?{operation:"add",srcFactor:"one",dstFactor:"zero"}:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-list",cullMode:n.doubleSided?"none":"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}(r,i,o,a,t.matrices.length/2);const l=[{binding:0,resource:{buffer:t.matrixBuffer}}];U(o).forEach(((e,t)=>{if(e){const{addressModeU:n,addressModeV:i,magFilter:a,minFilter:s}=e.sampler;l.push({binding:2*t+1,resource:r.createSampler({addressModeU:n,addressModeV:i,magFilter:a,minFilter:s})}),l.push({binding:2*t+2,resource:this.textures[e.source].createView()})}})),a.uniformBindGroup=r.createBindGroup({layout:a.pipeline.getBindGroupLayout(1),entries:l})})))})),this.animations=e.animations,this.startTime=Date.now()/1e3}update(e,t){this.animations.length&&(this.root.animate(this.animations,Date.now()/1e3-this.startTime),this.meshes.forEach((e=>{e.matrices=[]})),this.root.passMatrices(this.meshes),this.meshes.forEach((t=>{if(t.matrixBuffer){const n=E(t.matrices);e.queue.writeBuffer(t.matrixBuffer,0,n.buffer,n.byteOffset,n.byteLength)}}))),(this.presetCamera||this.userCamera).update(e,t)}destroy(){this.userCamera.destroy(),this.meshes.forEach((e=>{var t;null===(t=e.matrixBuffer)||void 0===t||t.destroy(),e.primitives.forEach((e=>{e.destroy()}))})),this.textures.forEach((e=>e.destroy()))}}var k=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))};const Y=n(466);class K{constructor(e,t,n,r){this.canvas=e,this.device=t,this.context=n,this.contextFormat=r;let i=t.createTexture({size:[e.clientWidth*devicePixelRatio,e.clientHeight*devicePixelRatio],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDesc={colorAttachments:[],depthStencilAttachment:{view:i.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},window.addEventListener("resize",(()=>{const a=[e.clientWidth*devicePixelRatio,e.clientHeight*devicePixelRatio];n.configure({device:t,format:r,size:a}),i.destroy(),i=t.createTexture({size:a,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.renderPassDesc.depthStencilAttachment.view=i.createView()})),this.stats=new Y,this.stats.showPanel(0),this.stats.dom.style.left="",this.stats.dom.style.right="0px",document.body.appendChild(this.stats.dom)}render(){const e=()=>{this.stats.begin();const t=this.device.createCommandEncoder();this.renderPassDesc.colorAttachments=[{view:this.context.getCurrentTexture().createView(),loadValue:{r:.3,g:.5,b:.7,a:1},storeOp:"store"}];const n=t.beginRenderPass(this.renderPassDesc);this.scene.update(this.device,n),this.scene.meshes.forEach((e=>{e.primitives.forEach((t=>{t.isTransparent||t.draw(n,e.matrices.length/2)}))})),this.scene.meshes.forEach((e=>{e.primitives.forEach((t=>{t.isTransparent&&t.draw(n,e.matrices.length/2)}))})),n.endPass(),this.device.queue.submit([t.finish()]),this.stats.end(),void 0!==this.requestId&&(this.requestId=requestAnimationFrame(e))};this.requestId=requestAnimationFrame(e)}load(e){var t;return k(this,void 0,void 0,(function*(){this.gltf=yield function(e){return B(this,void 0,void 0,(function*(){if("gltf"===e.split(".").pop())return $(yield fetch(e).then((e=>e.json())),e);const t=yield fetch(e).then((e=>e.arrayBuffer())),n=new Uint32Array(t,12,1)[0],r=new Uint8Array(t,20,n);return $(JSON.parse(new TextDecoder("utf-8").decode(r)),e,t,28+n)}))}(e),void 0!==this.requestId&&cancelAnimationFrame(this.requestId),null===(t=this.scene)||void 0===t||t.destroy(),this.scene=new W(this.gltf,this.gltf.defaultScene,this.canvas,this.device,this.contextFormat),this.render()}))}getCameraCount(){return this.scene?this.scene.cameras.length:0}setCamera(e){this.scene&&(void 0!==e?(this.scene.presetCamera=this.scene.cameras[e],this.scene.presetCamera.needUpdate=!0):(this.scene.presetCamera=null,this.scene.userCamera.reset(this.scene.aabb)))}}var J=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))};const Q=document.getElementById("webgpu-canvas"),Z=document.getElementById("gui"),ee=document.getElementById("model-select"),te=document.getElementById("glb-upload"),ne=document.getElementById("camera-select"),re=document.createElement("option");re.innerHTML="User Camera",re.value="User Camera",fetch("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/model-index.json").then((e=>e.json())).then((e=>{e.forEach((e=>J(void 0,void 0,void 0,(function*(){const t=document.createElement("option");t.innerHTML=e.name,t.value=`https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/${e.name}/glTF/${e.name}.gltf`,ee.add(t),"DamagedHelmet"===e.name&&(ee.value=t.value,function(e){return k(this,void 0,void 0,(function*(){const t=navigator.gpu;if(!t)throw new Error("WebGPU is not supported on this browser.");const n=yield t.requestAdapter(),r=yield n.requestDevice(),i=e.getContext("webgpu"),a=i.getPreferredFormat(n);return i.configure({device:r,format:a,size:[e.clientWidth*devicePixelRatio,e.clientHeight*devicePixelRatio]}),new K(e,r,i,a)}))}(Q).then((e=>{const t=t=>J(void 0,void 0,void 0,(function*(){yield e.load(t),ne.innerHTML="",ne.add(re);for(let t=0;t<e.getCameraCount();t+=1){const e=document.createElement("option");e.innerHTML=String(t),e.value=String(t),ne.add(e)}}));t(ee.value),ee.onchange=()=>t(ee.value),ne.onchange=()=>{e.setCamera("User Camera"!==ne.value?Number(ne.value):void 0)},te.onchange=()=>{t(URL.createObjectURL(te.files[0]))}})).catch((e=>{const t=document.createElement("p");t.innerHTML=e,t.style.fontSize="2em",t.style.color="red",Z.appendChild(t)})))}))))}))})()})();