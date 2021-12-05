import { vec2, vec3 } from 'gl-matrix';

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

export function toFloat(num: number | undefined, defaultValue = 1) {
  const n = num !== undefined ? num : defaultValue;
  if (Number.isInteger(n)) {
    return `${n}.0`;
  }
  return n;
}

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Uint32Array
  | Float32Array;

export function newTypedArray(
  type: string | number,
  buffer: ArrayBuffer,
  byteOffset: number,
  length: number
) {
  switch (type) {
    case 5120:
    case 'BYTE':
      return new Int8Array(buffer, byteOffset, length);
    case 5121:
    case 'UNSIGNED_BYTE':
      return new Uint8Array(buffer, byteOffset, length);
    case 5122:
    case 'SHORT':
      return new Int16Array(buffer, byteOffset, length);
    case 5123:
    case 'UNSIGNED_SHORT':
      return new Uint16Array(buffer, byteOffset, length);
    case 5125:
    case 'UNSIGNED_INT':
      return new Uint32Array(buffer, byteOffset, length);
    case 5126:
    case 'FLOAT':
      return new Float32Array(buffer, byteOffset, length);
    default:
      throw new Error('invalid component type');
  }
}

export function toIndexArray(array: TypedArray): Uint16Array | Uint32Array {
  if (array instanceof Uint16Array || array instanceof Uint32Array) {
    return array;
  }
  let toArray;
  if (array instanceof Float32Array) {
    toArray = new Uint32Array(array.length);
  } else {
    toArray = new Uint16Array(array.length);
  }
  array.forEach((element, index) => {
    toArray[index] = element;
  });
  return toArray;
}

export function joinArray(arrays: Array<Float32Array>) {
  let length = 0;
  arrays.forEach((array) => {
    length += array.length;
  });
  const joined = new Float32Array(length);
  length = 0;
  arrays.forEach((array) => {
    joined.set(array, length);
    length += array.length;
  });
  return joined;
}

export function createGPUBuffer(
  array: TypedArray,
  usage: number,
  device: GPUDevice
) {
  const buffer = device.createBuffer({
    size: (array.byteLength + 3) & ~3, // eslint-disable-line no-bitwise
    usage,
    mappedAtCreation: true,
  });
  let writeArary;
  if (array instanceof Int8Array) {
    writeArary = new Int8Array(buffer.getMappedRange());
  } else if (array instanceof Uint8Array) {
    writeArary = new Uint8Array(buffer.getMappedRange());
  } else if (array instanceof Int16Array) {
    writeArary = new Int16Array(buffer.getMappedRange());
  } else if (array instanceof Uint16Array) {
    writeArary = new Uint16Array(buffer.getMappedRange());
  } else if (array instanceof Uint32Array) {
    writeArary = new Uint32Array(buffer.getMappedRange());
  } else {
    writeArary = new Float32Array(buffer.getMappedRange());
  }
  writeArary.set(array);
  buffer.unmap();
  return buffer;
}

export function generateNormals(indices: TypedArray, positions: TypedArray) {
  const normals = new Float32Array(positions.length);
  for (let i = 0; i < indices.length; i += 3) {
    const triIndices = [];
    for (let n = 0; n < 3; n += 1) {
      triIndices.push(indices[i + n]);
    }
    const triangle = triIndices.map((vertexIndex) => {
      const index = vertexIndex * 3;
      return vec3.fromValues(
        positions[index],
        positions[index + 1],
        positions[index + 2]
      );
    });

    const dv1 = vec3.create();
    vec3.sub(dv1, triangle[1], triangle[0]);
    const dv2 = vec3.create();
    vec3.sub(dv2, triangle[2], triangle[0]);
    const normal = vec3.create();
    vec3.cross(normal, vec3.normalize(dv1, dv1), vec3.normalize(dv1, dv2));

    for (let n = 0; n < 3; n += 1) {
      const index = (i + n) * 3;
      for (let t = 0; t < 3; t += 1) {
        normals[index + t] += normal[t];
      }
    }
  }
  return normals;
}

export function generateTangents(
  indices: TypedArray,
  positions: TypedArray,
  normals: TypedArray,
  uvs: TypedArray
) {
  const tangents = new Float32Array((normals.length / 3) * 4);
  for (let i = 0; i < indices.length; i += 3) {
    const triIndices = [];
    for (let n = 0; n < 3; n += 1) {
      triIndices.push(indices[i + n]);
    }
    const pos = triIndices.map((vertexIndex) => {
      const index = vertexIndex * 3;
      return vec3.fromValues(
        positions[index],
        positions[index + 1],
        positions[index + 2]
      );
    });
    const uv = triIndices.map((vertexIndex) => {
      const index = vertexIndex * 2;
      return vec2.fromValues(uvs![index], uvs![index + 1]);
    });

    const dv1 = vec3.create();
    vec3.sub(dv1, pos[1], pos[0]);
    const dv2 = vec3.create();
    vec3.sub(dv2, pos[2], pos[0]);
    const duv1 = vec2.create();
    vec2.sub(duv1, uv[1], uv[0]);
    const duv2 = vec2.create();
    vec2.sub(duv2, uv[2], uv[0]);

    const sign = duv2[1] * duv1[0] - duv1[1] * duv2[0] >= 0 ? 1 : -1;
    const tangent = vec3.create();
    vec3.sub(
      tangent,
      vec3.scale(dv1, dv1, duv2[1]),
      vec3.scale(dv2, dv2, duv1[1])
    );
    vec3.normalize(tangent, tangent);

    for (let n = 0; n < 3; n += 1) {
      const index = (i + n) * 4;
      for (let t = 0; t < 3; t += 1) {
        tangents[index + t] += tangent[t];
      }
      tangents[index + 3] = sign;
    }
  }
  return tangents;
}