/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  return strs.slice(1).reduce(function(acc, el) {
    if (acc.length > el.length) {
      acc = acc.slice(0, el.length);
    }

    while (acc) {
      if (!el.startsWith(acc)) {
        acc = acc.slice(0, -1);
      } else {
        return acc;
      }
    }

    return acc;
  }, strs[0] || '')
};
