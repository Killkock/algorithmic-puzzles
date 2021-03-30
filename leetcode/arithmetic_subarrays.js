/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
// https://leetcode.com/problems/arithmetic-subarrays/submissions/

// first solution with sorting

var checkArithmeticSubarrays = function(nums, l, r) {
    const queries = l.reduce((acc, el, i) => {
        return [...acc, nums.slice(el, r[i] + 1)]
    }, []);
    
    return queries.reduce((acc, query) => {
        query.sort((a, b) => a - b);
        let prevDelta = null;
        for (let i = 1; i < query.length; i++) {
            const current = query[i];
            const prev = query[i - 1];
            const currentDelta = current - prev;
            
            if ((currentDelta !== prevDelta) && prevDelta !== null) {
                return [...acc, false]
            }
            
            prevDelta = currentDelta;
        }
        
        return [...acc, true];
    }, [])
};
