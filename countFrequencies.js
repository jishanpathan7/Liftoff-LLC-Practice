// Count frequencies of all elements in array in O(1) space

// O(k) space complexity where k is the number of count elements in the array
function elementFrequencies(arr) {
  const frequencyMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]]) {
      frequencyMap[arr[i]]++;
    } else {
      frequencyMap[arr[i]] = 1;
    }
  }
  for (let key in frequencyMap) {
    console.log(key, " ==>", frequencyMap[key]);
  }
}

// elementFrequencies([1, 2, 3, 4, 5, 1, 2, 3]);


