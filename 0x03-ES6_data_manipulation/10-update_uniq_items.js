export default function updateUniqueItems(myMap) {
  try {
    myMap.forEach((value, key) => {
      if (value === 1) {
        myMap.set(key, 100);
      }
    });
  } catch (error) {
    throw new Error('Cannot process');
  }
  return myMap;
}
