export default function appendToEachArrayValue(array, appendString) {
  const Newarr = [];
  for (const idx of array) {
    const value = idx;
    Newarr.push(appendString + value);
  }

  return Newarr;
}
