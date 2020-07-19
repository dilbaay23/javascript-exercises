const removeFromArray = function(... args) {
    var array=args[0];
    var newArray=[];
    array.forEach(element => {
      if(!args.includes(element)) {
      newArray.push(element)
    }

    });
return newArray;
}

module.exports = removeFromArray
