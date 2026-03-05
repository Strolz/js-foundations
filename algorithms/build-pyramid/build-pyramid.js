
/*

1. You should have a function named pyramid.
2. Your pyramid function should have three parameters.
3. pyramid("o", 4, false) should return "\n   o\n  ooo\n ooooo\nooooooo\n".
4. pyramid("p", 5, true) should return "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n".

*/


function pyramid(str, int, truth) {

    /* stage empty array to catch characters being pushed*/
    let newStr = [];

    /* store a single empty space character and store it in space variable */
    let space = " ";

    /* start the index at one to space it away from the left margin 1 index*/
    let index = 1;

    /* store the int argument in the reverse variable */
    let reverse = int;
    
    /* loop through and push the provided character in sequence pointing up*/
    if(truth !== true) {
      for(let i = 0; i < int; i++) { 
        newStr.push(`\n${space.repeat(int-index)}${str.repeat(i + index)}`);
        index++
      }
    
    /* loop through and push the provided character in sequence pointing down*/
    } else if(truth == true) {
        for(let i = int; i > 0; i--) {
              newStr.push(`\n${space.repeat(int-reverse)}${str.repeat(i + reverse - 1)}`)
              reverse--      
        }
    }
  /* add a blank line at the end to meet requirements */  
  newStr.push(`\n`)

  /* join the array at each space and provide the string(s) */
  return newStr.join("");
};

/* call the function */
pyramid("o", 4, true);
