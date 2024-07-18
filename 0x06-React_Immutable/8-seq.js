const { Seq } = require('immutable');

export default function printBestStudents(grades) {
  // Convert the input object to a Seq
  const gradesSeq = Seq(grades);

  // Filter students with a score >= 70
  const bestStudents = gradesSeq.filter(student => student.score >= 70);

  // Capitalize the first letter of first and last names
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // Transform the best students' names
  const transformedStudents = bestStudents.map(student => ({
    ...student,
    firstName: capitalize(student.firstName),
    lastName: capitalize(student.lastName),
  }));

  // Convert the transformed students back to a plain object
  const result = transformedStudents.toJS();

  console.log(result);
}