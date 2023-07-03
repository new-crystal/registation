"use strict"

const wrap_1 = document.querySelector(".wrap_1")
const wrap_2 = document.querySelector(".wrap_2")

const firstName = document.querySelector("#firstName");
const LastName = document.querySelector("#lastName");
const KoreanName = document.querySelector("#koreanName");

const contry = document.querySelector("#nation_no");

const affilation = document.querySelector("#affiliation");

const contryNumber = document.querySelector("#contryNum");
const phone = document.querySelector("#phoneNumber")

const email_1 = document.querySelector("#Email1")
const email_2 = document.querySelector("#Email2")
const email_3 = document.querySelector("#Email3")

const member = document.querySelector("#member");
const nonMember = document.querySelector("#non_member")

const participation = document.querySelector("#Participation");
const participationSelect = document.querySelector("#Participation_1")

const category = document.querySelector("#Category")
const categorySelect = document.querySelector("#Category_1")
const categoryOthers= document.querySelector("#category_others")

const need = document.querySelector("#need");
const nonNeed = document.querySelector("#non_need")

const doctor = document.querySelector("#doctor");
const specialist = document.querySelector("#specialist")

const yes_1 = document.querySelector("#yes_1")
const no_1 = document.querySelector("#no_1")
const yes_2 = document.querySelector("#yes_2")
const no_2 = document.querySelector("#no_2")
const yes_3 = document.querySelector("#yes_3")
const no_3 = document.querySelector("#no_3")
const yes_4 = document.querySelector("#yes_4")
const no_4 = document.querySelector("#no_4")
const yes_5 = document.querySelector("#yes_5")
const no_5 = document.querySelector("#no_5")

const participationRadios = document.querySelectorAll('.session_radio');
const checkboxes = document.querySelectorAll('.checkbox');
const allCheck = document.querySelector("#all_check");
const checkedbox2 = document.querySelectorAll('.check');
const firstCheck = document.querySelector("#first_check");
const secondCheck = document.querySelector("#second_check");
const thirdCheck = document.querySelector("#third_check");
const fourthCheck = document.querySelector("#fourth_check");

const submitButton = document.querySelector("#Submit")
const finalButton = document.querySelector(".next_btn")
const preButton = document.querySelector(".pre_btn")

firstName.addEventListener("input",(event)=>{englishInput(event)})
LastName.addEventListener("input",(event)=>{englishInput(event)})

KoreanName.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const onlyHangul = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  
    if (!onlyHangul.test(inputValue)) {
      event.target.value = inputValue.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]+/g, '');
    }
  });

function englishInput(event){
    const inputValue = event.target.value;
  const onlyEnglish = /^[A-Za-z]+$/;

  if (!onlyEnglish.test(inputValue)) {
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
  }
}

phone.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const onlyNumbers = /^[0-9]+$/;
  
    if (!onlyNumbers.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, '');
    }
  });

contry.addEventListener("click", ()=>{ 
     contryNumber.value = contry.options[contry.selectedIndex].dataset.nt})

email_3.addEventListener("click", ()=>{
    email_2.value = email_3.options[email_3.selectedIndex].value
})

member.addEventListener("click", ()=>{
    if(member.checked){
        nonMember.checked = false;
    }else{
        member.checked = true;
    }
})

nonMember.addEventListener("click", ()=>{
    if(nonMember.checked){
        member.checked = false;
    }else{
        nonMember.checked = true;
    }
})

participationSelect.addEventListener("click", ()=>{
    participation.value = participationSelect.options[participationSelect.selectedIndex].value
})

categorySelect.addEventListener("click", ()=>{
    const categoryValue = categorySelect.options[categorySelect.selectedIndex].value;
    category.value = categoryValue;
    if(categoryValue === "Others"){
        categoryOthers.style.display = "";
    }else{
        categoryOthers.style.display = "none";
    }
})

nonNeed.addEventListener("click",()=>{
    if(nonNeed.checked){
        need.checked = false;
        doctor.disabled = true;
        specialist.disabled = true;
    }else{
        need.checked = true
        doctor.disabled = false;
        specialist.disabled = false;
    }
})

need.addEventListener("click", ()=>{
    if(need.checked){
        nonNeed.checked = false;
        doctor.disabled = false;
        specialist.disabled = false;
    }
})

const numArray = [1,2,3,4,5];
let one = false;
let two = false;
let three = false;
let four = false;
let five = false;

let first = false;
let second = false;
let third = false;
let fourth = false;
let fiveth = false;

numArray.forEach((num) => {
    const yes_num = document.getElementById(`yes_${num}`);
    const no_num = document.getElementById(`no_${num}`);
  
    yes_num.addEventListener("click", () => {
      if (yes_num.checked) {
        no_num.checked = false;
      } else {
        yes_num.checked = true;
      }
      if(num === 1 &&yes_num.checked ){one = true; first = true; return;}
      if(num === 2 &&yes_num.checked){two = true; second = true; return;}
      if(num === 3 &&yes_num.checked){three = true; third = true; return;}
      if(num === 4 &&yes_num.checked){four = true; fourth = true; return;}
      if(num === 5 &&yes_num.checked){five = true; fiveth = true; return;}
    });
  
    no_num.addEventListener("click", () => {
      if (no_num.checked) {
        yes_num.checked = false;
      } else {
        no_num.checked = true;
      }
      if(num === 1 &&no_num.checked){one = true; return;}
      if(num === 2 &&no_num.checked){two = true; return;}
      if(num === 3 &&no_num.checked){three = true; return;}
      if(num === 4 &&no_num.checked){four = true; return;}
      if(num === 5 &&no_num.checked){five = true; return;}
    });
  });

preButton.addEventListener("click", ()=>{
    wrap_2.style.display = "none";
    wrap_1.style.display = "";
}) 

let checkedArr = []

submitButton.addEventListener("click",(e)=>{onSubmit(e)})
allCheck.addEventListener("click", ()=>selectAll());
/**모두 체크 눌렀을 때 */
function selectAll(){
    checkedbox2.forEach((checkbox) => {
        checkbox.checked = allCheck.checked
    })
    checkedArr = [firstCheck.checked, secondCheck.checked, thirdCheck.checked, fourthCheck.checked ];    
}


finalButton.addEventListener("click", ()=>onClickSubmit())

function onSubmit(e){
    e.preventDefault()
    if(!firstName.value || !LastName.value){
        alert("invaild Name");
        firstName.focus()
        return;
    }
    if(!contry.value){
        alert("invaild contry");
        contry.focus()
        return;
    }
    if(!affilation.value){
        alert("invaild affilation");
        affilation.focus()
        return;
    }
    if(!phone.value){
        alert("invaild phone");
        phone.focus()
        return;
    }
    if(!email_1.value ){
        alert("invaild email");
        email_1.focus()
        return;
    }
    if(!member.checked && !nonMember.checked){
        alert("invaild member");
        member.focus()
        return;
    }
    if(!participation.value){
        alert("invaild participation");
        participation.focus()
        return;
    }
    if(!category.value){
        alert("invaild category");
        category.focus()
        return;
    }
    if(!need.checked && !nonNeed.checked){
        alert("invaild grade");
        need.focus()
        return;
    }

    if(need.checked && !doctor.value && !specialist.value){
        alert("invaild grade");
        need.focus()
        return;
    }

    if(!one|| !two || !three || !four || !five){
    alert("invaild  Session participation");
    return;
}
      const isAnyCheckboxChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  
      if (!isAnyCheckboxChecked) {
        alert("Please select at least one option.");
        return;
      } 

      wrap_1.style.display = "none";
      wrap_2.style.display = "";
}

function onClickSubmit(){
    if(!firstCheck.checked || !secondCheck.checked){
        alert("필수항목을 체크해주세요.")
        firstCheck.focus()
        return;
    }else{
        checkedArr = [firstCheck.checked, secondCheck.checked, thirdCheck.checked, fourthCheck.checked ];    

    }
    const members = member.checked ? true : false
    const needs = need.checked ? true: false
    const checkArray = []
    checkboxes.forEach((check)=>{
        checkArray.push(check.checked)
    })
    console.log("체크항목", checkedArr)
    console.log("이름",firstName.value, LastName.value)
    console.log("국가", contry.value)
    console.log("소속", affilation.value)
    console.log("휴대폰", phone.value)
    console.log("이메일", email_1.value, email_2.value)
    console.log("member", members)
    console.log("참석유형",participation.value )
    console.log("카테고리",category.value )
    console.log("평점신청 여부", needs, doctor.value, specialist.value)
    console.log("세션참여 여부", [first, second, third, fourth, fiveth])
    console.log("가입경로", checkArray )
}