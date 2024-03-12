export default function updateUniqueItems(map) {
  const map1 = map;
  if (map1 instanceof Map) {
    for (const [key, value] of map1) {
      if (value === 1) {
        map1.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map1;
}
