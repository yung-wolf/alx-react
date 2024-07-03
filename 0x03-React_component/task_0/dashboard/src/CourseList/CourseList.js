// new component named CourseList. It returns a table element with an id CourseList

import React from "react";
import Proptypes from "prop-types";
import CourseListRow from "./CourseListRow";
import './CourseList.css'
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        {listCourses.length == 0 ?
          <CourseListRow textFirstCell="No course available yet" isHeader={true} /> :
          (
            <>
              <CourseListRow textFirstCell="Available courses" isHeader={true} />
              <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </>
          )
        }
      </thead>

      <tbody>
        {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} /> */}

        {/* When listCourses contains at least one element, display a row for each element showing the name of the course and the number of credits
        Make sure to add a key to help React optimize rendering */}

        {listCourses.length > 0 && listCourses.map(course => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)}

      </tbody>
    </table>
  )
}

// Define proptypes
CourseList.Proptypes = {
  listCourses: Proptypes.arrayOf(CourseShape)
};

// Define default props
CourseList.defaultProps = {
  listCourses: []
}

export default CourseList