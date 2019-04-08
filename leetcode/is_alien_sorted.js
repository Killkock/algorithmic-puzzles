var isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        if !(compareStrings(words[i], words[i + 1], order)) return false;
    }   
    return true;
};

var compareStrings = function(str1, str2, order) {
    let maxLng = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < maxLng; i++) {
        let str1Let = str1[i];
        let str2Let = str2[i];
        
        if (order.indexOf(str1Let) > order.indexOf(str2Let)) {
            return false;
        } else if (order.indexOf(str1Let) < order.indexOf(str2Let)) {
            return true;
        }
    }
    
    return true;
}
