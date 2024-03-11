export default function getStudentsByLocation(arr, city) {
  const Newarr = arr.filter((locs) => locs.location === city);
  return Newarr;
}
