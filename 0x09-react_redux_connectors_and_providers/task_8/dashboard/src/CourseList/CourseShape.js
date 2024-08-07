import Proptypes from 'prop-types';

// function CourseShape({ id, name, credit }) {
//   return
// }

// Define proptypes
const CourseShape = Proptypes.shape({
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  credit: Proptypes.number.isRequired
})

export default CourseShape