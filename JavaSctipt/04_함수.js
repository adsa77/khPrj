// console.log("zzz");

// function f01(){
//   console.log("f01 called...");
// }

// const f02 = function(){
//   console.log("anonymous called...");
// }

// //화살표 함수
// const f03 = () => {
//   console.log("arrow funtion called...")
// }

// f01();
// f02();
// f03();

// function f001(x){
//   return x+1;
// }

// const f002 = function(x){
//   return x+1;
// }

// //화살표 함수
// const f003 = x => {
//   return x+1;
// }

// const f004 = (x,y) => {
//   return x+y+1;
// }

// const f003 = (x) => {return x+y+1;}
// const f003 = x => return x+y+1;

// result01=f001(10);
// result01=f002(10);
// result01=f003(10);

// console.log(result01);
// console.log(result02);
// console.log(result03);

function printNum(x){
  console.log(x);
  console.log(arguments);
}

// printNum(123, 200, 300);

// =======================================



function getTen(){
  return printNum;
}

const result = getTen();
// console.log(result);

// result(777);

// =======================================

// const printNum = function(x){
//   console.log(x);
//   console.log(arguments);
// }

// =======================================

// function hello() {
//   console.log("안녕~~~!");
// }

// hello();

// const hi = hello();

// console.log(hi);

// hi();

// console.log(typeof 10);

// const x = "sentence";
// const x = true
// const x = new Object();
// const x = () =>{}
// const x = null
// const x = undefined;

// console.log(typeof x);

// =======================================

// <!-- / const calcResult 3/2;  // 1.5= 일반적인 숫자 == infinite =   -->
// const calcResult = 3/0; // Infinity

// const isFiniteResult = isFinite(calcResult);
// console.log(isFiniteResult);

// const calcResult = 1/"5";
// const calcResult = 1/"hello";

// console.log(calcResult);

// console.log( isNaN(calcResult) );

console.log( 1+2 );
console.log( 1+"2" );
console.log( "1"+2 );
console.log( "1"+"2" );
console.log( "1"*2 );
console.log( "abc"*2 );
console.log( 0 == "0" );
console.log( 0 == [] );
console.log( "0" == [] );

