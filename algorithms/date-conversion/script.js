const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate.toString()}`;
const options = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`;
}

function formatDateLong(date) {
 return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`;
}
