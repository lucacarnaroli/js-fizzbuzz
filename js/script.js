// Scrivi un programma che stampi i numeri da 1
// a 100,
var numeri = Math.floor(Math.random() * 101);
for (var i = 0; i < 100; i++) {
  console.log(numeri);
  if (numeri / 3) {
    console.log('fizz');
  } else if (numeri / 5) {
    console.log('buzz')
  } else if (numeri / 3 && 5) {
    console.log('fizz'||'buzz')
  } else {
    console.log(numeri);
  }

}
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero
var tre = numeri / 3;
var cinque = numeri / 5;
