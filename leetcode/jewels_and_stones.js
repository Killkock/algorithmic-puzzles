var numJewelsInStones = function(J, S) {
    const stones = J.split('');
    return stones.reduce((acc, stone) => {
        let counter = 0;
        
        for (let i = 0; i < S.length; i++) {
            if (stone === S[i]) {
                counter++;
            }
        }
        
        return acc + counter;
    }, 0);
};
