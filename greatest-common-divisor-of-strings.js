/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let gcd = "";

  if (str1 + str2 !== str2 + str1) return gcd;

  function gcdCal(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  return str1.slice(0, gcdCal(str1.length, str2.length));
};
