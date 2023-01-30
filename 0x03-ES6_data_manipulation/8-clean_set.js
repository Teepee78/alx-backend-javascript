export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined) return '';

  return [...set].filter((item) => item.startsWith(startString))
    .reduce(
      (total, item) => {
        if (total !== '') {
          return `${total}-${item.replace(startString, '')}`;
        }
        return item.replace(startString, '');
      },
      '',
    );
}
