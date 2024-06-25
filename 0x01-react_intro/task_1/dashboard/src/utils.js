function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

// export functions
export { getFullYear, getFooterCopy };