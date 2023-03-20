import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString())
      .then((data) => {
        const output = [];
        output.push('This is the list of our students');
        const keys = Object.keys(data);
        keys.sort();
        for (let i = 0; i < keys.length; i++) {
          output.push(`Number of students in ${keys[i]}: ${data[keys[i]].length}. List: ${data[keys[i]].join(', ')}`);
        }
        response.status(200).send(output.join('\n'));
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if (major !== 'CS' && major !== 'SWE') { response.status(500).send('Major parameter must be CS or SWE'); }

    readDatabase(process.argv[2].toString())
      .then((data) => {
        response.status(200).send(
          `List: ${data[major].join(', ')}`
        );
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
