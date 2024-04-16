console.log("hi world ~!")

function sayHello() {
  alert("hello");
}

// document.querySelector("선택자");
// 현재 문서에서 선택자를 가져오겠다.

const x = document.querySelector("#target");
x.style.backgroundColor = "red";
// 현재 문서에서 아이디가 target인 것을 가져오겠다.

//버튼 누르면 색 바뀌게 하기
function changeColor() {
  const x = document.querySelector("#target");
  x.style.backgroundColor = "blue";
  // console.log( x.innerText );
  x.innerText = "JavaScript";
}

//selectroAll은 조건에 맞는 모든 요소들을 가져옴
//요소 한개가 아니라 여러개라 배열에 담아주어야 함
function setBox() {
  const boxArr = document.querySelectorAll(".box")
  console.log(boxArr); 
  for(let i = 0; i < boxArr.length; i++) {
    boxArr[i]
    boxArr[i].style.width = "100px";
    boxArr[i].style.height = "100px";
    boxArr[i].style.backgroundColor = "blue";
  }
}

function checkDup(){
  //유저가 입력한 아이디 가져오기
  const userIdTag = document.querySelector("#userId");
  console.log(userIdTag);
  console.log(userIdTag.placeholder);
  console.log(userIdTag.id);
  console.log(userIdTag.type);
  console.log(userIdTag.value);

  userIdTag.placeholder = "zzz바꿈ㅋㅋㅋ"
  userIdTag.value = "JS로 넣어주는 value ㅋㅋㅋ"
  userIdTag.type = "checkBox"
  //중복인지 확인하기
}

