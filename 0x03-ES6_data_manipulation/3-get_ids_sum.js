export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.reduce((sum, obj) => sum + obj.id, 0);
}
