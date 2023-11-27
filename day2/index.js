//concatenation
let name = "Dubu";
let age = 20;
console.log("My name is " +name+ " And I am " +age+ "years old");
let string=`My name is ${name} And I am ${age} years old`;
console.log(string)
// Usage of various builtin functions
console.log(string.length);
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.substring(0,8));
console.log(string.split(" "));
const gadgets="Clock, TeleVision, MobilePhone, Watch, Fan";
console.log(gadgets.split(", "));
const members=["Dudu","Bubu","MiniD","MiniB"];
members[4]="MMniniB";
members.push("MMiniD");
members.unshift("MMiniDB");
members.pop();
console.log(Array.isArray(members));
console.log(Array.isArray("members"));
console.log(members.indexOf("MiniD"));
console.log(members);
console.log(members[2]);


