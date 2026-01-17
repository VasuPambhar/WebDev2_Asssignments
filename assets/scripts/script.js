"use strict";

// sample data - expanded Star Wars characters with varied ages
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const brokenCharacters = [
  { id: 11, name: "Bob Kent", age: 83 },
  { id: 12, age: 234 },
  { id: 13, name: "Clark Patel", age: 77 },
  { id: 14, age: 112 },
  { id: 15, age: 42 },
];

// 1. Iterate through the characters array and output each character's name to the console using console.log(). Then, dynamically create <li> elements for each character name and append them to the HTML unordered list element with the id "names-list".
characters.forEach(element => {
  console.log(element.name);
});
populateList("names-list",characters);

// 2. Filter the characters array to find only those characters whose age property is less than 40. Log each filtered character's name to the console. Then, dynamically create <li> elements for each filtered character and append them to the HTML unordered list element with the id "young-characters-list".
const ageLessThan40 = characters.filter(ch => ch.age<40);
ageLessThan40.forEach(element => {
  console.log(element.age);
});
populateList("young-characters-list",ageLessThan40);

// 3. Build a reusable function that accepts an array of character objects as a parameter. Inside the function, iterate through the array and extract each character's name property. Dynamically generate <li> elements for each name and append them to a target HTML list element. Call this function with the characters array and render the results in the unordered list with id "function-list".
function populateList(elemID, arr){
  const ul = document.getElementById(elemID);
  arr.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element.name;
    ul.appendChild(li);
  });
}
populateList("function-list",characters);

// 4. Write a function that accepts two parameters: an array of character objects and a numeric age threshold. Inside the function, filter the array to include only characters whose age is below the threshold value. For each filtered character, create an <li> element with their name and append it to the target list. Call this function and render the results in the unordered list with id "age-filter-list".
function filterAge(arr,threshold) {
  const filteredAge = arr.filter(element => element.age<threshold);
  populateList("age-filter-list",filteredAge);
}
filterAge(characters,30);

// 5. Enhance your rendering functions from exercises 3 and 4 with error handling logic. Before accessing the name property of each character object, check whether the "name" property exists. If a character object is missing the name property, use console.error() to log a descriptive error message to the console, and dynamically create and display the error message in the HTML div element with id "error-messages".
function renderList(elemId,arr,errID) {
  const ul = document.getElementById(elemId);
  let err = document.getElementById(errID);
  let msg = "";
  arr.forEach(element => {
    if (!element.name) {
      let errmsg = `Error: ID ${element.id} is missing a name`;
      msg += errmsg + `<br>`;
      console.error(errmsg);
    }
    else{
      const li = document.createElement("li");
      li.textContent = element.name;
      ul.appendChild(li);
    }
  });
  err.innerHTML = msg;
}
renderList("error-handling-list",characters,"error-messages");

// 6. Create a second array called "brokenCharacters" that intentionally contains objects with missing name properties (e.g., objects with only id and age). Pass this broken array to your error-handling functions from exercise 5. Verify that your error handling correctly identifies the missing name properties, logs appropriate error messages to the console, and displays those error messages in the HTML div element with id "broken-array-errors".
renderList("broken-array-list",brokenCharacters,"broken-array-errors")
