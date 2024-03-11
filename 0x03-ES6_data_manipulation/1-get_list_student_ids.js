export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const Newarr = arr.map((ids) => ids.id);
    return Newarr;
  }
  return [];
}
