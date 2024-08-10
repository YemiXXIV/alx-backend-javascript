export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      for (const studgrade of newGrade) {
        if (studgrade.studentId === student.id) {
          if (studgrade.grade) {
            grade = studgrade.grade;
          }
        }
      }
      return { ...student, grade };
    });
}
