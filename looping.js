// LOOPING Technique
// 1. for loop
// 2. while loop
// 3. do while
// 4. for of --> array loop 
// 5. for in --> object loop 

const friends = ['elon', 'bill', 'mark', 'waren'];
const numbers = [34, 343, 653, 634, 34634, 34654, 3456, 42];

for(let key of numbers){
    console.log(typeof key)
}

for(const friend of friends){
    console.log(friend);
}
for (let i = 0; i < friends.length; i++){
    console.log(friends[i]);
}
let i = 0;
while(i < friends.length){
    console.log(friends[i])
    i++
}
for(const number of numbers){
    console.log(number)
}
for( let i = 0; i<numbers.length; i++){
    console.log(numbers[i])
}
const n =0;
while(n < numbers){
    console.log(numbers[n])
    n++
}