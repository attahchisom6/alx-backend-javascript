export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const list = [];
  const myMap = new Map();
  array.forEach((obj) => {
    myMap.set(obj.id, obj);
  });

  myMap.forEach((value, key) => {
    list.push(key);
  });
  return list;
}
