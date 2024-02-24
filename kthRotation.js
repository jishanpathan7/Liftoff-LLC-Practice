//  Solve Kth Array rotation problem

// approach for solving Kth Array rotation problem involves rotating an array to the right by Kth steps
// so what we can do here is shifting the elements of the array. we can perform cyclic rotations by swapping the elements in the loop.

function kthRotation(arr, k) {
    const n = arr.length;
    k = k % n;
  
    // Reverse the entire array
    reverseArray(arr, 0, n - 1);
  
    // Reverse the first K elements
    reverseArray(arr, 0, k - 1);
  
   // Reverse the remaining elements
    reverseArray(arr, k, n - 1);
  
    return arr;
  }
  
  function reverseArray(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  console.log(kthRotation([1, 2, 3, 4, 5], 2));
console.log(kthRotation(['a', 'b', 'c', 'd'], 3));

// Time Complexity: O(n)
// Space Complexity: O(1)