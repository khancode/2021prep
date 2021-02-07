/* Question 8.3
Magic Index: A magic index in an array A[0...n-1] is defined to be an index
such that A[i] = i.
Given a sorted array of distinct integers, write a method to find a magic index,
if one exists, in array A.
*/
// Time is O(log(n)), Space is O(1)
function magicIndex(arr) {
    // perform binary search
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);

        if (arr[mid] < mid) {
            left = mid + 1;
        } else if (arr[mid] > mid) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1; // no magic index exists
}

// elements not distinct
// Time is O(log(n)), Space is O(log(n))
function magicIndexNotDistinct(arr) {
    return magicIndexNotDistinctHelper(arr, 0, arr.length - 1);
}

function magicIndexNotDistinctHelper(arr, start, end) {
    if (start > end) {
        return - 1;
    }

    const midIndex = Math.trunc((start + end) / 2);
    const midValue = arr[midIndex];
    if (midIndex === midValue) {
        return midIndex;
    }

    // Search left
    const leftIndex = Math.min(midIndex - 1, midValue);
    const left = magicIndexNotDistinctHelper(arr, start, leftIndex);
    if (left >= 0) {
        return left;
    }

    // Search right
    const rightIndex = Math.max(midIndex + 1, midValue);
    const right = magicIndexNotDistinctHelper(arr, rightIndex, end);

    return right;
}

/* notes
if elements are distinct perform binary search
if A[i] < i, search in right half
else if A[i] > i, search in left half
else return i

if elements not distinct
we need to search both left and right halves of sorted array
For example, if A[5] = 3:
    We know A[4] != 4 because A[4] must be less than or equal to 3
    Therefore, possible valid indices to traverse would be A[0] to A[3]
*/

const input = [-3, -1, 2, 3, 5, 8];

console.log(magicIndex(input)); // 2
console.log(magicIndexNotDistinct(input)); // 2