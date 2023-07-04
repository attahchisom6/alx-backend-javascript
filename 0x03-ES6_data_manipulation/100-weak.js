export const weakMap = new WeakMap();

let count = 1;
export default function queryAPI(endpoint) {
  // let count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count);
  count += 1;
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
