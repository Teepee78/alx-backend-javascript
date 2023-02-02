interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperiences?: number,
  location: string,
  [propName: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentClassInterface {
  workOnHomeWork(): string,
  displayName(): string,
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
