export default function getStudentIdsSum(arr) {
  const initialValue = 0;
  const Newarr = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initialValue,
  );
  return Newarr;
}
