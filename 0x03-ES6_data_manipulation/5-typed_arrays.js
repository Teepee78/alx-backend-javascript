export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  try {
    const Int8View = new Int8Array(buffer);
    Int8View[position] = value;
  } catch (err) {
    throw Error('Position outside range');
  }

  return new DataView(buffer);
}
