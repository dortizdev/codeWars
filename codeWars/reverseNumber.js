function reverseNumber(n) {
  if (n < 0) {
   return parseFloat(n.toString().split("").reverse().join("")) * -1;
  } else {
   return parseFloat(n.toString().split("").reverse().join(""));
  }
}
