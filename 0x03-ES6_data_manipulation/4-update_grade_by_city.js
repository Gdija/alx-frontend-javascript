export default function updateStudentGradeByCity(arr, city, newGrades) {
  const Newarr1 = arr.filter((student) => student.location === city);
  const Newarr2 = Newarr1.map((student) => {
    // search for students grade based on their Ids
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // if matching grade is found update it otherwise set it to N/A
    const updatedGrade = matchingGrade ? matchingGrade.grade : 'N/A';
    return { ...student, grade: updatedGrade };
  });
  return Newarr2;
}
