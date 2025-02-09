/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let sum = "";
  const minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    sum += word1[i] + word2[i];
  }
  if (word1.length > word2.length) {
    sum += word1.slice(minLength);
  } else {
    sum += word2.slice(minLength);
  }
  return sum;
};
