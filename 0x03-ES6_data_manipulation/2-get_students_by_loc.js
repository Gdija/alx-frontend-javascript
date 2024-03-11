export default function getStudentsByLocation(arr, city) {
  const Newarr = arr.filter((locs) => locs.location == city);
    //if (city === location) {
      //return locs.location;
    //}
  //});
  return Newarr;
}
