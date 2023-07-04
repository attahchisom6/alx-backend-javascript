export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || Array.isArray(set)) {
    return false;
  }

  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
