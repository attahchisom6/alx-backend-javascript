export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !startString) {
    return '';
  }

  let result = '';
  for (const element of set) {
    if (element === startString || element.startsWith(startString)) {
      const trimmedString = element.substring(startString.length);
      result += `${trimmedString}-`;
    }
  }
  return result.slice(0, -1);
}
