/* Question 8.4
Power Set: Write a method to return all subsets of a set.

Leetcode example:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
// Time is O(n*(2^n)), Space is O(n*(2^n))
function powerSet(arr) {
    const result = [[]];
    findPowerSet(arr, 0, [], result);
    return result;
}

function findPowerSet(arr, start, set, result) {
    // base case
    if (start === arr.length) {
        return;
    }


    for (let i = start; i < arr.length; i++) {
        const newSet = [...set];
        newSet.push(arr[i]);
        result.push(newSet);
        findPowerSet(arr, i + 1, newSet, result);
    }
}

/* notes
When we generate a subset, each element has the "choice" of either being in there or not.\
Thus, total subsets for n elements with 2 states is:
    {2*2*2*...} n times which is 2^n
Each element will appear exactly in half of all subsets which is 2^(n-1) subsets.
Since there are n elements, total number of elements in all subsets will be n*(2^(n-1)).
Therefore, it's computation time/space is O(n*(2^n))
*/

const input = [1,2,3];
console.log(powerSet(input)); 
/*
output
[
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 2, 3 ],
  [ 1, 3 ], [ 2 ],
  [ 2, 3 ], [ 3 ]
]
*/