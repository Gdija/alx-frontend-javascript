export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const foundValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return foundValues.join('-');
}
