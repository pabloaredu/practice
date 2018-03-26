var countLetters = (str) => {
  var myObj = {};
  for(var i = 0; i < str.length; i++) {
    var item = str[i];
    if(item !== "") {
      if(myObj[item] === undefined) {
        myObj[item] = 0;
      };
      myObj[item] +=1;
    };
  };
  return myObj;
};

console.log(countLetters('Hello'));