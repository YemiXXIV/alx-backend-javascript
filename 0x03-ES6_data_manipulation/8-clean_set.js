export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  let finalString;
  const position = startString.length;
  set.forEach((value) => {
    if (typeof value === 'string') {
      if (value.startsWith(startString)) {
        if (finalString === undefined) {
          finalString = value.slice(position);
        } else {
          finalString = `${finalString}-${value.slice(position)}`;
        }
      }
    }
  });
  return finalString;
}
