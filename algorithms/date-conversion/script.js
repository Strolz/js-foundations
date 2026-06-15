/*

1. You should have a variable named currentDate that holds the current date and time using the Date object.
2. You should have a variable named currentDateFormat that holds the current date in the format Current Date and Time: <ddd> <MMM> <dd> <yyyy> <HH>:<mm>:<ss> <TIMEZONE>.
3. You should log the value of currentDateFormat to the console.
4. You should have a function formatDateMMDDYYYY
5. The function formatDateMMDDYYYY should take a single parameter.
6. When the date object holds Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time), the function formatDateMMDDYYYY should return Formatted Date (MM/DD/YYYY): 9/27/2024.
7. You should have a function formatDateLong
8. The function formatDateLong should take a single a parameter.
9. When the date object holds Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time), the function formatDateLong should return Formatted Date (Month Day, Year): September 27, 2024.

 */

// Stage curent date and time 
const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate.toString()}`;

// Set accessible date format
const options = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

console.log(currentDateFormat);

// Return date in a clear month/day/year format
function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`;
}

// Return date using the long-form options 
function formatDateLong(date) {
 return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`;
}
