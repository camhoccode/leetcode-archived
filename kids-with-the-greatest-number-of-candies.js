/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const ress = candies.map((item, index) => {
    const childArr = candies.map((ele, inn) =>
      inn === index ? (ele += extraCandies) : ele
    );
    const max = Math.max(...childArr);
    return max === item + extraCandies ? true : false;
  });
  return ress;
};
