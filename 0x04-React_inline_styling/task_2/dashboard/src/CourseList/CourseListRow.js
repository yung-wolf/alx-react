import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowColor: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRowColor: {
    backgroundColor: '#deb5b545',
  },
  tableTitle: {
    textAlign: 'center',
    borderBottom: '2px solid lightgrey',
    padding: '5px',
  },
  cell: {
    padding: '5px',
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  return (
    <tr className={isHeader ? css(styles.headerRowColor) : css(styles.rowColor)}>
      {isHeader ? (
        textSecondCell == null ? (
          <th className={css(styles.tableTitle)} colSpan="2">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.tableTitle)}>{textFirstCell}</th>
            <th className={css(styles.tableTitle)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.cell)}>{textFirstCell}</td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

export default CourseListRow;
