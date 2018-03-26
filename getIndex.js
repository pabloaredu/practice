
var getIndex = (str) => {
var myObj = {};
  for (var i = 0; i < str.length; i++) {
    var item = str[i];
    if(item !== " ") {
      if(myObj[item] === undefined) {
        myObj[item] = [];
        myObj[item].push(i);
      } else {
        myObj[item].push(i);
      };
    };
  };
  return myObj;
};

console.log(getIndex('Lighthouse labs'));