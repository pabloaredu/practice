function reverse (str) {
  var arr = str.split('');
  var length = arr.length;
  var myArr = [];
  for (var i = 0; i < length; i++) {
    myArr[i] = arr[arr.length - (i + 1)];
  };
  console.log(`This is the answer: ${myArr.join('')}`);
};

reverse('hello');