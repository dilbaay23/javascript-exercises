const ftoc = function(fah) {
let cel= (fah - 32) * 5/9;
return Math.round(cel*10)/10;
}

const ctof = function(cel1) {
  let fah1 = (cel1 * 9/5) + 32;
  return Math.round(fah1*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
