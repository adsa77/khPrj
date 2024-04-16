// //함수 외부에 만든 변수는 전역변수
// let x = 10; // 전역변수
// x = 20; //전역변수

// // 전역변수는 window에 부여됨
// // let: 일반적인 변수
// // const: final 같은 변수

// const y = 10;
// //y = 20; 재할당 불가능

// function f01(){
//   var x = 30; //지역변수
//   console.log(window.x);
// }


// f01();

// console.log(x);
// var x = 10;
// 어디에 있든 var쓰면 적용 됨

function f01(){

  
  if(true){
    let x = 10;
  }

  if(true){
    console.log(x);
  }


}

f01();


