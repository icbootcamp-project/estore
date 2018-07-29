var str = 'hello';

//var counter = 0;

// function count(str, letter) {
//   var counter = 0;
//   if (str[0] === letter) {
//     counter++;
//   }

//   if (str.length > 1) {
//     str = str.slice(1);
//     counter = counter + count(str, letter);
//   }
//   return counter;
// }

// var result = count(str, 'l');
// console.log(result);

// hel, l   el, l l,l
// el,      l,    counter = 1

// return.....
//           1

// // hello
// // check first character

// // ello
// // check first chareacter

// // llo
// // check first xter

function count(str, letter, counter = 0) {
  if (str[0] === letter) {
    counter++;
  }

  if (str.length === 1) {
    //means string is done, time to return
    return counter;
  }

  if (str.length > 1) {
    str = str.slice(1);
    return count(str, letter, counter);
  }
}

var result = count(str, 'l');
console.log(result);

// -------------
