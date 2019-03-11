var isValid = function(s) {
  const openBraces = ['(', '{', '['];
  const closeBraces = [')', '}', ']'];
  const braceList = [];

  for (let i = 0; i < s.length; i++) {
    if (openBraces.includes(s[i])) {
      braceList.push(s[i]);
    } else {
      let lastBrace = braceList.slice(-1)[0];
      let lastBraceI = openBraces.indexOf(lastBrace);
      if (closeBraces[lastBraceI] === s[i]) {
        braceList.pop();
      } else {
        braceList.push(s[i])
      }
    }
  }

  return !braceList.length;
};
