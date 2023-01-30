export default function getListStudentsIds(students) {
  if (!Array.isArray(students)) return [];

  const ids = [];
  students.map((student) => ids.push(student.id));

  return ids;
}
