// Add JS here


function flatten(obj) {
  var result = {};
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
              result = Object.assign(result, flatten(obj[key]));
          } else {
              result[key] = obj[key];
          }
      }
  }
  return result;
}

const nestedObject = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
  contact: {
    email: "john@example.com",
    phone: {
      mobile: "123-456-7890",
      home: "987-654-3210",
    },
  },
};

console.log(flatten(nestedObject))