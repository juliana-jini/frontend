// 외부평가에는 유효성 검사에서 꼭 정규표현식을 쓰지 않아도 됩니다.
//현재 날짜 new Date()
const today = new Date()
console.log(today)  //Thu Jul 28 2022 14:39:24 GMT+0900 (대한민국 표준시)
                    //20220728
console.log("년도 : " + today.getFullYear())                    
console.log("월 : " + (today.getMonth()+1))    //월 0~11                
console.log("일 : " + today.getDate())                    
let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')      
             //배열요소를 특정기호로 연결하기
console.log(result)
const month = (today.getMonth()+1).toString().padStart(2,0)
result = [today.getFullYear(),month,today.getDate()].join('')
console.log(result)

//오늘날짜로 초기화
document.forms[0].regdate.value = result

function valid_check(){
    const frm = document.forms[0]
    const id = frm.seq
    const name = frm.name
    const tel = frm.tel
    const addr = frm.address
    const regdate = frm.regdate
    const grade = frm.grade
    const city = frm.city
    let isValid = true
    
    if(name.value == ''){
      //  alert('이름은 필수입력사항입니다.')
       document.getElementById('name').innerHTML='필수입력사항입니다.'
        name.focus()
        isValid = false
    }else {
        document.getElementById('name').innerHTML=''
    }

    let regex =  /^010-[0-9]{4}-[0-9]{4}$/
    // 정규표현식을 검사하는 함수 regex.test(문자열) 문자열이 regex 패턴인지 검사.
    if(regex.test(tel.value)===false) {
        //alert('입력된 값은 핸드폰 번호 형식이 아닙니다.')
        document.getElementById('tel').innerHTML='핸드폰 번호 형식이 아닙니다.'
    }else {
        document.getElementById('tel').innerHTML=''
    }

    if(addr.value == ''){
       // alert('주소는 필수입력사항입니다.')
       document.getElementById('address').innerHTML='필수 입력 사항입니다.'
        addr.focus()
        isValid = false
    }else {
        document.getElementById('address').innerHTML=''
    }
    if(regdate.value =='' || regdate.value != result){
        //alert('가입일자는 필수 입력이고 오늘날짜로 하세요.')
        document.getElementById('regdate').innerHTML='yyyyMMdd 형식 오늘 날짜로 필수입력 입니다..'
        regdate.focus()
        isValid=false
    }else {
        document.getElementById('regdate').innerHTML=''
    }
    regex =  /^[A-Ca-c]{1}$/    //   var valGrade = /^[ABC]$/i;
    frm.grade.value= grade.value.toUpperCase()
 //   if(!(grade.value == 'A' || grade.value == 'B' || grade.value == 'C')){
   if(regex.test(grade.value) === false){
        //alert('고객등급은 A, B, C 중 하나입니다.')
        document.getElementById('grade').innerHTML='고객등급은 A, B, C 중 하나입니다.'
        grade.focus()
        isValid=false
    }else {
        document.getElementById('grade').innerHTML=''
    }

    regex =  /^[0-9]{2}$/
    if(regex.test(city.value)===false){
    //    alert('도시코드는 숫자 2자리 입니다.')
    document.getElementById('city').innerHTML='도시코드는 숫자 2자리 입니다.'
        city.focus()
        isValid = false
    }else {
        document.getElementById('city').innerHTML=''
    }

    if(isValid){
        alert('유효성 통과 성공!')
    } else{
        alert('유효성 통과 실패!')
    }
}