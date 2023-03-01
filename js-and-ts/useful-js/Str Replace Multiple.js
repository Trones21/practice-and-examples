var chars = { 'a': '000', 'b': '!!!!', 'c': '-----' };
var s = '234abc567ab2b';
s = s.replace(/[abc]/g, m => chars[m]);
console.log(s);