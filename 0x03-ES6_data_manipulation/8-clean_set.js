export default function cleanSet(set, startString) {
  let result = '';
  if (!startString) {
    return result;
  }

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      const trimmedString = element.substring(startString.length);
      result += `${trimmedString}-`;
    }
  }
  return result.slice(0, -1);
}
