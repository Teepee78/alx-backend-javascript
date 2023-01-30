export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const studentsByCity = students.filter((student) => student.location === city);

  return studentsByCity.map((student) => {
    const grade = newGrades.find((grade) => student.id === grade.studentId);

    return { ...student, grade: grade ? grade.grade : 'N/A' };
  });
}
