function incrementString (strng) {
  spl = strng.split(/([0-9])/);
  word = spl[0];
  num = [];

  for(i = 0; i < spl.length; i++) {
    /([0-9])/.test(spl[i]) ? num.push(spl[i]) : 0;
  }

  incremented = String(num.join('') - -1).split('');

  while(incremented.length < num.length){
    incremented.unshift('0');
  }

  return word + incremented.join('');
}
