//  find the first unique element in an array without using inbuilt methods

function findFirstUniqueElement(array) {
  const frequencyMap = {};

  // count the frequency of each element
  for (const element of array) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  }

  // find the first unique element
  for (const element of array) {
    if (frequencyMap[element] === 1) {
      return element;
    }
  }
  return "no first unique element found";
}

console.log(findFirstUniqueElement(["a", "b", "c", "d", "a"]));

// time complexity : O(n)
// space complexity : O(k) 