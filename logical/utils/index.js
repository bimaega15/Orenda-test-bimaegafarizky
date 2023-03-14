const isPalindrome = (x) => {
  let firstVarX = x.toString().toLowerCase().split("");
  let resFirstX = firstVarX.join("");

  let secondVarX = firstVarX.reverse();
  let resSecondX = secondVarX.join("");

  let isPolindrome = resFirstX == resSecondX;
  let isResFirstX = resFirstX;
  let isReverseSecondX = resSecondX;

  return {
    isPolindrome,
    isResFirstX,
    isReverseSecondX,
  };
};

module.exports = {
  isPalindrome,
};
