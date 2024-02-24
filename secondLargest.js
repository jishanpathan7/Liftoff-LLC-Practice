// 2nd largest element in a array (without sort and complexity less than O(n))

function secondLargestElement(arr) {
  let largestElement = arr[0];
  let secondLargeElement = arr[1];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (currentElement > largestElement) {
      secondLargeElement = largestElement;
      largestElement = currentElement;
    } else if (currentElement > secondLargeElement) {
      secondLargeElement = currentElement;
    }
  }
  return { largestElement, secondLargeElement };
}
console.log(secondLargestElement([1, 2, 3, 4, 5])); // 4
console.log(secondLargestElement(["a", "b", "c", "d"])); // 'c'
console.log(secondLargestElement([10, 5, 20, 15, 25])); // 20


// time complexity O(n)
// space complexity O(1)


