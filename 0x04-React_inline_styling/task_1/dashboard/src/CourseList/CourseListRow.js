// a new component with the name CourseListRow. The component accepts three props:
// isHeader (bool, default: false)
// textFirstCell (string, required)
// textSecondCell (string / number, default: null)

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const rowColor = { backgroundColor: '#f5f5f5ab' };
const headerRowColor = { backgroundColor: '#deb5b545' };

function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null }) {
  return (
    <tr style={isHeader ? headerRowColor : rowColor}>
      {isHeader ? (
        textSecondCell == null ?
        <th className={css(styles.tableTitle)} colSpan="2">{textFirstCell}</th> :
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
    </tr>
  )
}

const styles = StyleSheet.create({
  tableTitle: {
    textAlign: 'center',
  }
})

export default CourseListRow