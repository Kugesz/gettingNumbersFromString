function getNumberFromString(s) {
  spl = s.split('')
  numbers = []
  
  spl.forEach(c => { console.log(c);if(!isNaN(c) && c.trim() !== '') {numbers.push(c);}});
  return parseInt(numbers.join(''),10);
}
