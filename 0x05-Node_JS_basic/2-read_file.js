const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    let numOfStudents = 0;
    const fields = {};

    for (const line of lines) {
      if (line !== '' && !line.startsWith('firstname,')) {
        numOfStudents++;

        const values = line.split(',');
        const name = values[0];
        const field = values[3];

        if (field in fields) {
          fields[field].push(name);
        } else {
          fields[field] = [name];
        }
      }
    }
    console.log(`Number of students: ${numOfStudents}`);

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
