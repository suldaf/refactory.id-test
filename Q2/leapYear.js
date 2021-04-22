function leapYear(start, end) {
  let output = "";
  for (let i = start; i <= end; i++) {
    if (i % 4 === 0 && i !== start) {
      if (i === end) {
        output += i;
      } else {
        output += i + ",";
      }
    }
  }
  return output;
}
console.log(leapYear(1900, 2000));
