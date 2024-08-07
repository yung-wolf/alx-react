function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return 'Copyright - Holberton School';
  }
  return 'Copyright - Holberton School main dashboard';
}

function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

// export functions
export { getFullYear, getFooterCopy, getLatestNotification };