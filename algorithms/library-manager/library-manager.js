
/* Library of books */
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

/* Start by displaying the section intro header */
console.log("Books in the Library:\n");

/* Create a list of each book's title and author */
function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`)
  .join("\n");
}

/* Display formated list of all books */
console.log(getBookInformation(library));

/* Section header */
console.log("\nList of book summaries:\n");

/* Create list of each book's summary */
function getBookSummaries(catalog) {
  return catalog.map(book => `${book.about}`);
}

/* Display formated list of all summaries */
console.log(getBookSummaries(library));

/* Section header */
console.log("\nList of books by Arvid Kahl:\n");

/* Create a filtered list of books by the given author */
function getBooksByAuthor(catalog, author){
  return catalog.filter(book => book.author == author);
}

/* Display filtered list of books by given author */
console.log(getBooksByAuthor(library, "Arvid Kahl"));

/* Section Header */
console.log("\nList of books by James Clear:\n");

/* Display filtered list of books by given author */
console.log(getBooksByAuthor(library, "James Clear"));

/* Section header */
console.log("\nTotal number of pages for all library books:\n");

/* Calculate total number of pages in all books combined */
function getTotalPages(catalog) {
  const pages = catalog.map(book => book.pages)
  return pages.reduce((book, total) => book + total, 0);  
}

/* Display total number of pages */
console.log(getTotalPages(library));
