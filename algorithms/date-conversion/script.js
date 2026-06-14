const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate.toString()}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`;
}

console.log(formatDateMMDDYYYY(currentDate));
