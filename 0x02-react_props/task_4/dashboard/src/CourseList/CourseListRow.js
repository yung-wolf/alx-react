// a new component with the name CourseListRow. The component accepts three props:
// isHeader (bool, default: false)
// textFirstCell (string, required)
// textSecondCell (string, default: null)

import React from 'react';

function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null }) {
  return (
    <tr>
      {/* {!isHeader && <td>{textFirstCell}</td>}
      {isHeader && <th>{textFirstCell}</th>}
      {textSecondCell && <td>{textSecondCell}</td>} */}

      {isHeader ? (
        textSecondCell == null ?
        <th id="title" colSpan="2">{textFirstCell}</th> :
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

export default CourseListRow