export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const ids = array.map((obj) => obj.id);
  return ids;
}
