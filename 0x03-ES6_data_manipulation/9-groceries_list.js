export default function groceriesList() {
  const array = [
    { key: 'Apples', value: 10 },
    { key: 'Tomatoes', value: 10 },
    { key: 'Pasta', value: 1 },
    { key: 'Rice', value: 1 },
    { key: 'Banana', value: 5 },
  ];

  const myMap = new Map();
  array.forEach((obj) => {
    myMap.set(obj.key, obj.value);
  });
  return myMap;
}
