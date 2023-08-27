const form=document.getElementById("form")
// console.log(form)
const userName=document.getElementById("userName")
console.log(userName)
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmPwd=document.getElementById("confirmPwd")
const tandc=document.getElementById("tc")

var isvalidName=false;
var isvalidEmail=false;
var isvalidpassword=false;
var isvalidCPasswod=false;
var isTcChecked=false;

userName.addEventListener('keyup',checkUserName)
email.addEventListener('keyup',checkEmail)
password.addEventListener('keyup',checkPassword)
confirmPwd.addEventListener('keyup',checkCPassword)
tandc.addEventListener('click',checkTandC)

form.addEventListener('submit',(e)=>{
    // console.log(e)
    e.preventDefault()//it stops the form to not submit when clicked on sumit
    validate()
})



function validate(){
    
    let nameValue = userName.value.trim()
    let emailValue = email.value.trim()
    let passwordValue=password.value.trim()
    let confirmPwdValue=confirmPwd.value.trim()
    // // let tandcValue = tandc.value

    // var isvalidName=false
    // var isvalidEmail=false
    // var isvalidpassword=false
    // var isvalidCPasswod=false
    // var isTcChecked=false

    //user name check

    isvalidName=checkUserName()
        
    //Email check
    isvalidEmail = checkEmail()
   
    

    //Password
    isvalidpassword=checkPassword()
    
    //confirm Password
    isvalidCPasswod=checkCPassword()

    //Terms and conditions 
    isTcChecked=checkTandC()   

    

    if(isvalidName && isvalidEmail && isvalidpassword && isvalidCPasswod && isTcChecked){
        form.submit()
    }


}
function setError(input,message){
    let parent=input.parentElement
    let small=parent.querySelector('small')
    small.innerHTML=message
    parent.classList.add('error')
    parent.classList.remove('success')

}
function setSuccess(input){
    let parent=input.parentElement
    parent.classList.add('success')
    parent.classList.remove('error')

}

function emailCheck(input){
    let emailReg = /^[a-z0-9,_%+-]+@[a-z0-9,-]+\.[a-z]{2,4}$/;
    let valid=emailReg.test(input)
    return valid//return false if email not in format

}


function checkUserName(){
    let nameValue = userName.value.trim()
    
    if(nameValue===""){
        setError(userName, 'Username cannot be empty')
    }
    else if(nameValue.length<3){
        setError(userName,'Username should have minimum 3 characters')
    }
    else{
        setSuccess(userName)
        var isvalidName=true
        console.log('isvalidName',isvalidName)
    }
    return isvalidName
}

function checkEmail(){
    
    let emailValue = email.value.trim()
    if(emailValue===''){
        setError(email,'Email cannot be empty')

    }
    else if(!emailCheck(emailValue)){
        setError(email,'Enter a valid Email Id')
    }
    else{
        setSuccess(email)
         var isvalidEmail=true
        console.log('isvalidEmail',isvalidEmail)
    }
    return isvalidEmail;

}

function checkPassword(){
    let passwordValue = password.value.trim()
    if(passwordValue===''){
        setError(password,'Password cannot be empty')

    }
    else if(passwordValue.length<8){
        setError(password,'Password should have minimum 8 characters')
    }
    else{
        setSuccess(password)
        var isvalidpassword=true
    }
    return isvalidpassword
}
function checkCPassword(){
    let passwordValue = password.value.trim()
    let confirmPwdValue=confirmPwd.value.trim()
    if(confirmPwdValue===''){
        setError(confirmPwd,'Password cannot be empty')

    }
    else if(confirmPwdValue!=passwordValue){
        setError(confirmPwd,'Passwords not matched')
    }
    else{
        setSuccess(confirmPwd)
        var isvalidCPasswod=true
    }
    return isvalidCPasswod;

}
function checkTandC(){
    if(!tandc.checked){
        setError(tandc,'Click on agree terms and conditions checkbox')
    }
    else{
        setSuccess(tandc)
        var isTcChecked=true
    }
    return isTcChecked;
    
}