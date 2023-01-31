export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) return '';

  // Turn set to array
  let array = [...set];
  // Filter array
  array = array.filter((item) => item.startsWith(startString));

  return array
    .reduce(
      (total, item) => {
        console.log(total);
        if (total !== '') {
          return `${total}-${item.replace(startString, '')}`;
        }
        return item.replace(startString, '');
      },
      '',
    );
}
