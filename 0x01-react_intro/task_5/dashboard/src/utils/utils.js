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

function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

// export functions
export { getFullYear, getFooterCopy, getLatestNotification };