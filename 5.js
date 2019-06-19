var str = "3*(X+11)"  //변경가능한 문자열
var inputX = 5      //입력받은 변수 X
str = str.replace("X",inputX); //문자열의 X 위치에 입력받은 x값으로 대체한다

console.log(eval(str)) //eval 함수를 사용해 문자열을 계산한다