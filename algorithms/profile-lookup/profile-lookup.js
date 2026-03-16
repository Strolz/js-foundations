
/*

1. The contacts array should still be present in the global scope. Reset the lesson to recover it if you deleted it.
2. You should have a function named lookUpProfile.
3. lookUpProfile("Kristian", "lastName") should return a string.
4. lookUpProfile("Kristian", "lastName") should return the string Vos
5. lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
6. lookUpProfile("Harry", "likes") should return an array
7. lookUpProfile("Bob", "number") should return the string No such contact
8. lookUpProfile("Bob", "potato") should return the string No such contact
9. lookUpProfile("Akira", "address") should return the string No such property
10. The contacts array should remain unchanged after running lookUpProfilef

*/

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {

  /* Normalize the inputs to lowercase for case-insensitive matching */
  let newName = name.toLowerCase();
  let newProp = prop.toLowerCase();
  
  /* Search contacts for a matching name */
  for(const search of contacts) {
      if(search.firstName.toLowerCase() == newName) {
        if(prop in search == true) {
          return search[prop];

        /* Property doesn't exist on this contact */
        }else {
            return "No such property";
          }
      }
  }
  
  /* Contact doesn't exist */
  return "No such contact";
};
