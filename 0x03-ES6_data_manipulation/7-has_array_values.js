export default function hasValuesFromArray(set, array) {
  // const Newarr = new Set(set);
  return array.every((element) => set.has(element));
}
