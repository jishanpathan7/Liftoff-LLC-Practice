function flattenArray(arr) {
  const result = [];

  function flatten(innerArr) {
    for (let i = 0; i < innerArr.length; i++) {
      if (Array.isArray(innerArr[i])) {
        // If the element is an array, recursively flatten it
        flatten(innerArr[i]);
      } else {
        // If the element is not an array, push it to the result array
        result.push(innerArr[i]);
      }
    }
  }

  flatten(arr);
  return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4, [7, 8]], 5], [6]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
