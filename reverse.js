const friends = ['elon', 'bill', 'mark', 'waren'];
const numbers = [34, 343, 653, 634, 34634, 34654, 3456, 42];

// friends.reverse();
// console.log(friends);
// numbers.reverse();
// console.log(numbers)

//for of
const rev_numbers = [];
for(const num of numbers){
    rev_numbers.unshift(num);
}
console.log(rev_numbers)

//for loop
const reverse_numbers = [];
for(i = 0; i < numbers.length; i++){
    reverse_numbers.unshift(numbers[i]);
}
console.log(reverse_numbers)

//reverse loop
const rev_rev_numbers = [];
for( let i = numbers.length - 1; i >= 0; i--){
    rev_rev_numbers.push(numbers[i])
}
console.log(rev_rev_numbers)