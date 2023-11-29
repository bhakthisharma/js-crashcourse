let mochi = "dudu bubu minidudu minibubu bubumother dudumother";
let mochifam = mochi.split(" ");
console.log("Mochi family members are:");
for (let i = 0; i < mochifam.length; i++) {
  let uppercaseElements = mochifam[i].toUpperCase();
  console.log(uppercaseElements);
}
