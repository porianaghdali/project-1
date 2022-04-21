// alert('hello world');
// function sum() {
//     var a = 245;
//     var b = 443;
//     var c = a + b;
//     alert(c);
// }
// function SALAM(name, age, family) {
//     const prof = name + ' ' + age + ' ' + family;

//     alert(prof);




// }

// SALAM('ali', 22, 'ww');
// SALAM('reza', 22, 'ww');
// SALAM('poria', 22, 'ww');


// function takh(x, y) {
//     return x - (x * y / 100);


// }
// // takh(100, 30);
// // takh(100, 20);
// // takh(100, 40);
// alert(takh(100, 30));



// // function calculateDiscount(price, discount) {
// //     return price - (price * discount / 100);
// // }

// // const price1 = calculateDiscount(1500, 30);
// // const price2 = calculateDiscount(5000, 20);
// // const price3 = calculateDiscount(6000, 10);

// // alert(price1);
// // alert(price2);
// // alert(price3); 



// const welcome = () => "Hi"
// alert(welcome());

// // welcome();

// const withReturn = () => {
//     return "Welcome!";
//   }
//   alert(withReturn())

// const name = prompt('what is your name?');
// alert(name);

// const x = prompt('hold?');
// if (x == 10) {
//     alert("9");
// }
// else {
//     alert("kir");
// }


// const x = prompt('enter a number');
// switch (x) {
//     case "10":
//         alert('ten');
//         break;
//     case "9":
//         alert('nine');
//         break;
//     case "8":
//         alert('eight');
//         break;
//     case "7":
//         alert('seven');
//         break;
//     case "6":
//         alert('six');
//         break;
//     default:
//         alert('not found');
// }
// let counter = 1;

// while (counter <= 100) {
//   alert(counter);

//   counter++;
// }
// while (true) {
//     const number = prompt('Enter 1');

//     if (number == 1) {
//       break;
//     }
//   }



// let x = 0;
// while (x <= 100) {
//     x++;
//     if (x % 3 === 0) {
//         console.log('3');
//         continue;
//     }
//     console.log(x);

// }
// ;
// for (let x = 1 ;x < 20; ++x) {

//     if
//         (x % 3 === 0) { break; };
//         console.log(x);
// }

// const user = {
//     name: "poria",
//     "last.name": "naghdali",
//     age: 23,
//     gender: "male",
// }
// alert(user.name);
// alert(user.age);
// alert(user.gender);
// alert(user['last.name']);

// const user = {
//     name: "Mario",
//     age: 6,


//     input : prompt("Enter a property name:"),
// };
// user.gender= "male";


// alert(user['input']);
// alert(user['gender'])


// const user = {
//     name: "poria",
//     age: 23,
//     gender: "male",
//     welcome() {
//         return this.name;
//     },

//     family() {
//         return this.age;
//     },

//     gen() {
//         return this.family();
//     },

// };
// alert(user.welcome());
// alert(user.gen());


// const user = {
//     name: "poria",
//     age: 23,
//     gender: "male",
// }
// for (const x in user) {
//     alert(x);
//     alert(user[x]);
// }



// const items = ['a', 'b', 'c', 'd', 'e', 'f'];
// // alert(items);
// // alert(items.length);
// // items.push('e');

// // items[4] = 'a';
// // alert(items[4]);
// // alert(typeof items);



// let x = 0;
// while (x < items.length) {
//     alert(items[x]);
//     x++;
// };



// const binaries = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ];

//   for (let i = 0; i < binaries.length; i++) {
//     for (let j = 0; j < binaries[i].length; j++) {
//       aler(binaries[i][j]);
//     }
//   }



// const x = "poria naghdali";
// let a = 0;
// while (a < x.length) {
//     alert(x[a]);
//     ++a;
// };
// alert(x);



// const x = `Hello Emily!
// My name is Mario.
// Welcome to our app.
// Start using it! Get help`;
// alert(x);

// "use strict";

// function outer() {
//     let x = 0;
//     return function iner() {
//         return ++x;
//     };
// };
// const a = outer();
// alert(a());
// alert(a());
// alert(a());
// alert(a());



// function persion(name, age, family) {
//     this.name = name;
//     this.age = age;
//     this.family = family;
// };

// const poria = new persion('poria', 23, 'naghdali');
// alert(poria.age);



// function fullname() {
//     var x = document.getElementsByName['fname'];
//     var y = document.getElementsByName['lname'];
//     var z = x + y;
//     alert(z);

// };


// function move() {
//     var x = document.getElementById("two");
//     var i = 0;
//     var pos = 0;
//     var yy = setInterval(film, 5);
//     function film() {

//         if (pos == 350) {
//             clearInterval(yy);
//         }
//         else {
//             pos++;
//             x.style.top = pos + "px";
//             x.style.left = pos + "px";
//         }
//         if (pos = 350) {
//             ++i;
//         }

//     }



// }

// function time() {
//     document.getElementById("time").innerHTML = Date();
// }



// document.getElementById('test').addEventListener("click",function()
// { alert("kir");

// })


// var x = document.createElement('button');
// var y = document.createTextNode('23 sale');
// x.appendChild(y);
// var z = document.getElementById('div1');
// z.appendChild(x);


// var ps = document.getElementsByTagName('p');
// document.getElementById('p3').innerHTML = ps[3].innerHTML;
// var ps = document.getElementsByTagName('p');
// function red() {
//     var i;
//     for (i = 0; i < ps.length; i++) {

//         ps[i].style.color = 'red';
//     }

// };
// function green() {
//     var i;
//     for (i = 0; i < ps.length; i++) {

//         ps[i].style.color = 'green';
//     }

// }







// //function next() {
//     window.history.forward();
// };
// function back() {
//     window.history.back();
// }



// function fun() {
//     var txt = ""
//     if (confirm("prees a button")) {
//         txt = " ok";
//     } else {
//         txt = "cancel";

//     }
//     document.getElementById("demo").innerHTML = txt;
// }
// var x= setInterval(time,1000);
// function time() {
//     var t = new Date();
//     document.getElementById('time').innerHTML = t;
// }

function loaddoc() {



}