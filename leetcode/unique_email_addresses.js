/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let mappedEmails = emails.map(function(el) {
        let parts = el.split('@');
        let firstPart = parts[0];
        
        let transformedPart = firstPart.split('.').join('').split('+')[0];
        
        return `${transformedPart}@${parts[1]}`;
    })
    
    return new Set(mappedEmails).size;
};
