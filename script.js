// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are Equal (i,e,..Contains the same elements in the same order), And false otherwise.

const arraysAreEqual = (arr1,arr2) => {
if (arr1.length !== arr2.length) {
return false;
}
return arr1.every((curVal, index) => curVal === arr2[index])
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output: True
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: False
console.log(arraysAreEqual([], [])); // Output: True
