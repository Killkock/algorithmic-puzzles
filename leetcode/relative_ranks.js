/**
 * @param {number[]} nums
 * @return {string[]}
 */
//  Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
//  Example:
//      Input: [5, 4, 3, 2, 1]
//      Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
//      Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
//      For the left two athletes, you just need to output their relative ranks according to their scores.
var findRelativeRanks = function(nums) {
    const ranks = {
        0: 'Gold',
        1: 'Silver',
        2: 'Bronze'
    };

    const prizes = {};

    var sorted = nums.slice().sort( (a, b) => b - a);
    sorted.reduce( (acc, elem, i) => {
       acc[elem] = i;
       return acc;
    }, prizes);

    nums = nums.map( el => prizes[el] );
    return nums.map( (el) => {
       if (el <= 2) {
           return ranks[el] + ' Medal';
       }
       return String(el + 1);
    });
}; 
