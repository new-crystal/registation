"use strict";

const firstPage = document.querySelector(".wrap_1")
const secondPage = document.querySelector(".wrap_2")


const allCheck = document.querySelector("#all_check");
const checkboxes = document.querySelectorAll('.check');
const firstCheck = document.querySelector("#first_check");
const secondCheck = document.querySelector("#second_check");
const thirdCheck = document.querySelector("#third_check");
const fourthCheck = document.querySelector("#fourth_check");

const nextBtn = document.querySelector(".next_btn")
const finalBtn = document.querySelector(".final_btn")

const name =  document.querySelector("#FirstName")

var element_layer = document.getElementById('layer');
var element_layer2 = document.getElementById('layer2');
const container = document.querySelector(".container")

nextBtn.addEventListener("click",()=>onClickNextBtn());
allCheck.addEventListener("click", ()=>selectAll());
finalBtn.addEventListener("click", (e)=>send_it(e));
container.addEventListener("submit",(e)=>send_it(e) )

/**모두 체크 눌렀을 때 */
function selectAll(){
    checkboxes.forEach((checkbox) => {
        checkbox.checked = allCheck.checked
      })
}
let checkedArr = []
/**다음 버튼 눌렀을 때 */
function onClickNextBtn(){
    if(!firstCheck.checked || !secondCheck.checked){
        alert("필수항목을 체크해주세요.")
        firstCheck.focus()
    }else{
        checkedArr = [firstCheck.checked, secondCheck.checked,            thirdCheck.checked, fourthCheck.checked ];    
        firstPage.style.display = "none";
        secondPage.style.display = "";
        name.focus()
    }
}

/**주소 검색 */
function sample2_execDaumPostcode2() {

    if (document.getElementById('Addr2_tmp').value == "") {
        alert("상세 주소를 입력해 주세요.");
        document.getElementById('Addr2_tmp').focus();
    } else {
        document.getElementById('Zip').value = document.getElementById('Zip_tmp').value;
        document.getElementById('Addr1').value = document.getElementById('Addr1_tmp').value;
        document.getElementById('Addr2').value = document.getElementById('Addr2_tmp').value;
        foldDaumPostcode();
    }
}

function foldDaumPostcode() {
    // iframe을 넣은 element를 안보이게 한다.
    element_layer.style.display = 'none';
    element_layer2.style.display = 'none';
}
const email_2 = document.querySelector("#Email2")
const email_3 = document.querySelector("#Email3")
email_3.addEventListener("click", ()=>{
    email_2.value = email_3.options[email_3.selectedIndex].value
})



function sample2_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var fullAddr = data.address; // 최종 주소 변수
            var extraAddr = ''; // 조합형 주소 변수

            // 기본 주소가 도로명 타입일때 조합한다.
            if (data.addressType === 'R') {
                //법정동명이 있을 경우 추가한다.
                if (data.bname !== '') {
                    extraAddr += data.bname;
                }
                // 건물명이 있을 경우 추가한다.
                if (data.buildingName !== '') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('Zip_tmp').value = data.zonecode; //5자리 새우편번호 사용
            document.getElementById('Addr1_tmp').value = fullAddr;

            //document.getElementById('sample2_addressEnglish').value = data.addressEnglish;

            // iframe을 넣은 element를 안보이게 한다.
            // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)

            
            element_layer.style.display = 'none';
            element_layer2.style.display = '';
            document.getElementById('Addr2_tmp').value = "";
            document.getElementById('Addr2_tmp').focus();

            //if (isInPage(document.getElementById("Addr2"))) {
            //	document.getElementById('Addr2').focus();
            //}
        },
        width: '100%',
        height: '100%',
        maxSuggestItems: 5
    }).embed(element_layer);

    // iframe을 넣은 element를 보이게 한다.
    element_layer.style.display = 'block';

    // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
    initLayerPosition();

    // "주소입력"에 포커스
    //document.getElementById("region_name").focus();
}

// 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
// resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
// 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
function initLayerPosition() {
    var borderWidth = 5; //샘플에서 사용하는 border의 두께
    // 위에서 선언한 값들을 실제 element에 넣는다.
    element_layer.style.width = '100%';
    element_layer.style.height = '100%';
    element_layer.style.border = borderWidth + 'px solid';
}

const Surv15 = document.querySelector("#Surv15")
var Extd3_ck_b = true;		
const Extd3_ck = document.querySelector("#Extd3_ck")
Extd3_ck.addEventListener("click", ()=>{
    if(Extd3_ck.checked == true){
        document.getElementById('Surv15').disabled = true;
        Extd3_ck_b = false;
    } else {
        document.getElementById('Surv15').disabled = false;
    }
})

function send_it(e) {
e.preventDefault()
    if (name.value == "") {
        alert("성명을 입력해 주세요.");
        name.focus();
        return;
    }
     
    

const mobile = document.querySelector("#Mobile")
    if (mobile.value == "") {
        alert("휴대폰을 입력해 주세요.");
        mobile.focus();
        return;
    }



const email_1 = document.querySelector("#Email1")

email_1.value = email_1.value.replace(/\s/g, "");
if (email_1.value == "") {
    alert("이메일을 입력해 주세요.");
    email_1.focus();
    return;
}
if (email_chk(email_1.value, "front") == false) {
    alert("이메일을 입력해 주세요.");
    email_1.focus();
    return;
}
email_2.value = email_2.value.replace(/\s/g, "");
if (email_2.value == "") {
    alert("이메일을 입력해 주세요.");
    email_2.focus();
    return;
}
if (email_chk(email_2.value, "back") == false) {
    alert("이메일을 입력해 주세요.");
    email_2.focus();
    return;
}



 if (Extd3_ck_b)
{ 
            if ( Surv15.value == "" ){
                alert("의사면허번호를 입력해주세요.");
                Surv15.focus();
                return;
            }
}



var ORGN_CK_V = true;


if (ORGN_CK_V)
{ 
const Orgn1 = document.querySelector("#Orgn1")
            if (Orgn1.value == "") {
                alert("근무처를 입력해 주세요.");
                Orgn1.focus();
                return;
            }
const Addr1 = document.querySelector("#Addr1")
    if (Addr1.value == "") {
        alert("근무처 주소를 입력해 주세요.");
        Addr1.focus();
        return;
    } 
    const Addr2 = document.querySelector("#Addr2")         
                if (Addr2.value == "") {
                    alert("상세주소를 입력해 주세요.");
                    Addr2.focus();
                    return;
                }
                 
}

const Surv2_A = document.querySelector("#Surv2_A")
const Surv2_B = document.querySelector("#Surv2_B")
const Surv2_C = document.querySelector("#Surv2_C")
const Surv2_D = document.querySelector("#Surv2_D")
let selectedMember = "";

 if (!Surv2_A.checked && !Surv2_B.checked && !Surv2_C.checked && !Surv2_D.checked) {
                            alert('[대한내분비학회 회원 여부] 설문을 선택해주세요.');  
                            return;
                        }else{
                            if(Surv2_A.checked) {selectedMember = "평생회원"; }
                            if( Surv2_B.checked)  { selectedMember = "정회원"; }
                            if(Surv2_C.checked){selectedMember = "준회원"; }
                            if(Surv2_D.checked){selectedMember = "비회원"; }
                        }
                        
const Surv3 = document.querySelector("#Surv3")
if (!Surv3.options[Surv3.selectedIndex].value) {
   alert('[등록구분] 설문을 선택해주세요.');
    return;
                        }
                         

const Surv4_A = document.querySelector("#Surv4_A")
const Surv4_B = document.querySelector("#Surv4_B")
const Surv4_C = document.querySelector("#Surv4_C")
const Surv4_D = document.querySelector("#Surv4_D")
const Surv4_E = document.querySelector("#Surv4_E")
const Surv4_F = document.querySelector("#Surv4_F")
const Surv4_G = document.querySelector("#Surv4_G")
let path = [];
                        if (!Surv4_A.checked && !Surv4_B.checked && !Surv4_C.checked && !Surv4_D.checked  && !Surv4_E.checked && !Surv4_F.checked && !Surv4_G.checked) {
                            alert('[등록 경로] 설문을 선택해주세요.');
                            return;
                        }else{
                           path = [Surv4_A.checked, Surv4_B.checked, Surv4_C.checked, Surv4_D.checked,Surv4_E.checked,Surv4_F.checked,Surv4_G.checked]
                        }
                        
const surv16 = document.querySelector("#Surv16")

console.log("체크항목", checkedArr)
console.log("이름", name.value);
console.log("휴대폰", mobile.value)
console.log("이메일", email_1.value, email_2.value)
console.log("의사면허번호", Surv15.value, Extd3_ck.checked) 
console.log("전문의번호", surv16.value)
console.log("근무처", Orgn1.value)   
console.log("주소", Addr1.value, Addr2.value) 
console.log("회원여부", selectedMember)
console.log("등록구분", Surv3.options[Surv3.selectedIndex].value)
console.log("등록경로", path )



// document.getElementById("btn_area").style.display = "none";
// document.getElementById("btns").style.display = "";
// const frm = document.querySelector("#frm")
// frm.submit();
}

function email_chk(email, which) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    if (which == "front") {
        emailPattern = /^[a-zA-Z0-9._-]+$/;
    } else if (which == "back") {
        emailPattern = /^[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    } else {
        emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    }
    if (!emailPattern.test(email)) {
        return false;
    } else {
        return true;
    }
}