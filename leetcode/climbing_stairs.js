/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
 const max1 = n;
 const max2 = Math.floor(n / 2);

 let amountOfWays = 0;
 let amountOf1 = n;
 let amountOf2 = 0;
 let i = 0;

 while(amountOf1 >= 0) {
   if (amountOf2 * 2 + amountOf1 === n) {
     amountOfWays += reshuffleFormula(amountOf1, amountOf2);
   }

   if (i % 2 !== 0) amountOf2 += 1;
   amountOf1 -= 1;
   i += 1;
 }

 return amountOfWays;


 function reshuffleFormula(n1, n2) {
   return factorial(n1 + n2) / (factorial(n1) * factorial(n2));
 }

 function factorial(n) {
   let result = 1;
   for (let i = 1; i <= n; i++) result *= i;
   return result;
 }

};
