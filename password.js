function obfuscate (string) {
  var array = string.split('');
  for (var i = 0; i < array.length; i ++) {
    switch (array[i]) {
      case 'a':
      array[i] = 4;
      break;
      case 'e':
      array[i] = 3 ;
      break;
      case 'o':
      array[i] = 0;
      break;
      case 'l':
      array[i] = 1;
      break;
    }
  }
  console.log(array);
};

obfuscate('password');

