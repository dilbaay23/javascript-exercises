var reverseString = function(word) {
    let revWord='';
    for(i=(word.length-1);i>=0;i--){
        revWord+=word.charAt(i);

    }
return revWord;

}

module.exports = reverseString
