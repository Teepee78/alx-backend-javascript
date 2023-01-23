export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const staff of reportWithIterator) {
    if (result.length === 0) result = staff;
    else {
      result = `${result} | ${staff}`;
    }
  }

  return result;
}
