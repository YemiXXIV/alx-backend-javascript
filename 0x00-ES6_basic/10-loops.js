export default function appendToEachArrayValue(array, appendString) {
  // for (var idx of array) {
  //   var value = idx;
  //   array[idx] = appendString + value;
  // }

  const arrayupdate = [];
  for (const idx of array) {
    const value = idx;
    arrayupdate.push(appendString + value);
  }

  return arrayupdate;
  // return array;
}
