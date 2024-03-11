export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arr = new DataView(buffer);
  try {
    arr.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return arr;
}
