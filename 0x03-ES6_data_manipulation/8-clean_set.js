export default function cleanSet(set, startString) {
  if (typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0) {
    return '';
  }
  const foundValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return foundValues.join('-');
}
