// https://js.checkio.org/mission/most-wanted-letter/solve/

"use strict";

function mostWanted(data) {
   var letters = data.match(/[A-Za-z]/gi),
       numOfLetters = {},
       i,
       maxNum,
       maxLetters = [],
       key;

   letters = letters.map( el => el.toLowerCase() );
   for (i of letters) {
       if (!numOfLetters[i]) {
           numOfLetters[i] = 1;
       } else {
           numOfLetters[i] += 1;
       }
   }

   maxNum = Math.max.apply(null, Object.values(numOfLetters));

   for (key in numOfLetters) {
       if (numOfLetters[key] === maxNum) {
           maxLetters.push(key)
       }
   }

   maxLetters.sort();

   return maxLetters[0]
}
