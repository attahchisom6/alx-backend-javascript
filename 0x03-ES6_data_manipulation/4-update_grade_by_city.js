export default function updateStudentGradeByCity(array, city, newGrade) {
  if (!Array.isArray(array) || !Array.isArray(newGrade)) {
    return [];
  }

  const resultArray = array.filter((obj) => obj.location === city)
    .map((filteredArray) => {
      const gradeObj = newGrade.find((grade) => grade.studentId === filteredArray.id);
      return {
        ...filteredArray,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
  return resultArray;
}
