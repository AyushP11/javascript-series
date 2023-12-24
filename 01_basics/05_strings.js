const name = "ayush"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = 'ayush-github-com'

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(0, 5)
console.log(anotherString);
console.log(gameName);

const newStringOne = "   ayush   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%20programmer"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
