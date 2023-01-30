const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
    return;
  }

  const called = weakMap.get(endpoint);
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= 5) {
    throw Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
