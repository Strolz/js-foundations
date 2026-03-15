/*

1. You should have a function sortByYear in your code.
2. Your sortByYear function should take two parameters.
3. Your sortByYear function should return -1 if the releaseYear of book1 object is smaller than that of the book2 object, 1 if the releaseYear of book1 object is larger than that of the book2 object, and 0 in all other scenarios.
4. You should have an array books in your code.
5. Your books array should have at least three book objects.
6. Your books array should contain objects each with a string title, another string authorName, and a number releaseYear.
7. You should have an array filteredBooks in your code.
8. The filteredBooks array should have some of the books filtered out from the books array and not be empty.
9. The filteredBooks array should only contain books from the original books array.
10. The filteredBooks array should include only books released on or before a specified year.
11. You should call the sort higher order function by passing the sortByYear callback function on the filteredBooks array.

*/

const books = [
  {
    title: "IT",
    authorName: "Stephen King",
    releaseYear: "1949"
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: "1960"
  },
  {
    title: "Avalanche",
    authorName: "Arthor Roth",
    releaseYear: "1925"
  },
];

/* Filter out any book published prior to 1950 */
const filteredBooks = books.filter(book => book.releaseYear <= 1950)

/* Compare published year of two books */
function sortByYear(book1, book2) {
  if(book1.releaseYear < book2.releaseYear) return -1;
  if(book1.releaseYear > book2.releaseYear) return 1;
  return 0;
};

/* Sort the originally filtered books */
filteredBooks.sort(sortByYear);
