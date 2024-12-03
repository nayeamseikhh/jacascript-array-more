/**
 * Sort
 * ASSENDING A to Z
 * DECENDING Z to A
 */

const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib', 'anis', 'Anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

const numbers = [3, 4, 5, 2, 1, 6, 7, 9, 8, 12, 14, 24, 53, 63, 45, 19];
const numbers_asc = [...numbers].sort(function (a, b){ return a - b})
const numbers_dsc = [...numbers].sort(function (a, b){ return b - a})

console.log(numbers.sort()) //wrong methood
console.log(numbers_asc)
console.log(numbers_dsc)