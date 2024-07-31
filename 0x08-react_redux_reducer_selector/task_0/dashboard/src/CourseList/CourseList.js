// new component named CourseList. It returns a table element with an id CourseList

import React from "react";
import Proptypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.table)}>
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
        {listCourses.length > 0 && listCourses.map(course => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)}
      </tbody>
    </table>
  )
}

// hold rules for in-line styling
const styles = StyleSheet.create({
  table: {
    width: "100%",
    border: "1px solid #ccc",
    margin: "20px 0",
  },
})

// Define proptypes
CourseList.Proptypes = {
  listCourses: Proptypes.arrayOf(CourseShape)
};

// Define default props
CourseList.defaultProps = {
  listCourses: []
}

export default CourseList