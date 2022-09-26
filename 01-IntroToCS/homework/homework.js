'use strict'

function BinarioADecimal(num) {
  var n = num.toString();
  n = n.split("").reverse().join("");
  var sum = 0;
  for (var i = 0; i < n.length; i++) {
    sum += parseInt(n[i]) * 2 ** i;
  }
  return sum;
}

function DecimalABinario(num) {
  if (num / 2 === 1) {
    return 1
  } else {
    var binario = "";
    while (num >= 1) {
      binario += (num % 2).toString();
      num = Math.floor(num / 2);
    }
  }
  return binario.split("").reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}