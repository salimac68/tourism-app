function validate(){
let e = document.getElementById("email").value;
let w = document.getElementById("password").value;

let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

var i=regexp.test(e);
var s=pass.test(w);

if(e==""||w==""){   
    alert("field cannot be empty");
    return false;
    }
else if(i==false){
    alert("enter valid address");
    return false;
    }
else if(s==false){
    alert("enter valid password");
    return false;
    }
else{
    return true;
    }
}







// let email = document.getElementById("email");
// let error = document.getElementById("error");
// let password = document.getElementById("password");
// function validate(){
//     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
//     if(regexp.test(email.value)){
//         document.getElementById('error_email')
//         error.innerHTML = "Valid";
//         error.style.color = "green";
//         return true;
//     }
//     else{
//         error.innerHTML = "Invalid";
//         error.style.color = "red";
//         return false;
//     }
// }
// function validatepassword(password){
//     if(password.length===0){
//         document.getElementById("msg").innerHTML="";
//         return;
//     }
//     var matchedCase = new Array();
//     matchedCase.push("A-Z");
//     matchedCase.push("a-z");
//     matchedCase.push("0-9");

//     var ctr = 0;
//     for(var i=0;i<matchedCase.length;i++){
//         if(newRegExp(matchedCase[i]).test(password)){
//             ctr++;
//         }
//     }
//     var color = "";
//     var strength = "";
//     switch (ctr) {
//         case 0:
//         case 1:
//         case 2:
//             strength = "weak";
//             color = "red";
//             break;
//         case 3:
//             strength = "medium";
//             color = "orange";
//             break;
//         case 4:
//             strength ="strong";
//             color ="green";
//             break;
//     }
//     document.getElementById("msg").innerHTML = strength;
//     document.getElementById("msg").style.color = color;
// }