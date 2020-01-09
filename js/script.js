// Scrivi un programma che stampi i numeri da 1
// a 100,// ma per i multipli di 3 stampi “Fizz” al
// posto del numero // e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// CICLO FOR
for (var i = 1; i <= 100; i++) {
  if (i % 3==0 && i % 5 ==0) {
    console.log('fizzbuzz')
    document.getElementById('lista-for').innerHTML +='<li class="red">' + 'fizzbuzz'+'</li>';
  } else if (i % 3 == 0) {
    console.log('fizz');
    document.getElementById('lista-for').innerHTML += '<li class="green">'  + 'fizz'+'</li>';
  } else if (i % 5 == 0) {
    console.log('buzz');
    document.getElementById('lista-for').innerHTML += '<li class="blue">' + 'buzz'+'</li>';
  } else {
    console.log(i);
    document.getElementById('lista-for').innerHTML += '<li>' + i +'</li>';
   }
}
// CICLO WHILE
var i = 1;
while (i <= 100) {
  if (i % 3==0 && i % 5 ==0) {
    console.log('fizzbuzz')
    document.getElementById('lista-while').innerHTML += '<li class="red">' + 'fizzbuzz'+'</li>';
  } else if (i % 3 == 0) {
    console.log('fizz');
    document.getElementById('lista-while').innerHTML += '<li class="green">'  + 'fizz'+'</li>';
  } else if (i % 5 == 0) {
    console.log('buzz');
    document.getElementById('lista-while').innerHTML += '<li class="blue">' + 'buzz'+'</li>';
  } else {
    console.log(i);
    document.getElementById('lista-while').innerHTML += '<li>' + i + '</li>';
   }
  i++;
}
