import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

//Test for getFullYear
test('test for getFullYear', () => {
  // Mock date to avoid a time bomb test
  const mockDate = new Date(2024, 0, 1);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

  expect(getFullYear()).toBe(2024);

  // Restore original Date
  global.Date.mockRestore();
});

// Test getFooterCopy
test('test for getFooterCopy with true', () => {
  expect(getFooterCopy(true)).toBe('Copyright - Holberton School');
})

test('test for getFooterCopy with false', () => {
  expect(getFooterCopy(false)).toBe('Copyright - Holberton School main dashboard');
})

// Test getLatestNotification
test('test for getLatestNotification', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})