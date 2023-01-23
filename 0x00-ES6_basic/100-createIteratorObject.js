export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let deptIndex = 0;
      const allEmployees = Object.values(report.allEmployees);
      let i = 0;

      return {
        next() {
          if (deptIndex < report.getNumberOfDepartments()) {
            const current = allEmployees[deptIndex];

            if (i < current.length) {
              i++;
              return { done: false, value: current[i - 1] };
            }
            i = 1;
            deptIndex++;

            if (
              deptIndex < report.getNumberOfDepartments()
								&& allEmployees[deptIndex][0]
            ) {
              return { done: false, value: allEmployees[deptIndex][0] };
            }
            return { done: true, value: undefined };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
