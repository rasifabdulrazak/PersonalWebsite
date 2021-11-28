var pname = document.getElementById('name')
var pmail = document.getElementById('email')
var Lmesage = document.getElementById('Message')
var pmobile = document.getElementById('subject')
var errbox = document.getElementsByClassName('errormsg')
var submit = document.getElementById('submit-form')
var charecters = /^[a-zA-Z]+$/
var mailcode =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var phonenumber = /^((\+[1-9]{1,4}[ \-])|(\([0-9]{2,3}\)[ \-])|([0-9]{2,4})[ \-])?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;




        // Namepart validation

function validation(){
    if(pname.value =="" ){
        errbox[0].innerHTML="Please Enter your Name"
    }else if(pname.value.trim()==" "){
        errbox[0].innerHTML="Please do not enter spaces"
    }else if(charecters.test(pname.value)==false){
        
        errbox[0].innerHTML="Please Enter charecters only"
    }else{
        errbox[0].innerHTML=""
    }
        
    
    

}

         // emailpart validation

function emailpart(){
    if(mailcode.test(pmail.value)==false){
        errbox[1].innerHTML="Please Enter a valid email id"
    }else{
        errbox[1].innerHTML=""
    }

}

         // mobile number part

// function mobilepart(){
//   if(phonenumber.test(pmobile)){
//       if(pmobile.length==10){
//           var flag=true;
//       }else{
//           errbox[2].innerHTML="Please enter 10 digit"
//           var flag=false;
//       }
//   }else{
//       errbox[2].innerHTML="Number not valid"
//       var flag=false;
//   }if(flag){
//       errbox[2].innerHTML="Number"
//   }else{
//       errbox[2].innerHTML=""
//   }
// }

function mobilepart(){
    m=pmobile.value
    if(m.length<10 || m.length>10){
        errbox[2].innerHTML="Please Enter 10 digit mobile number"
    }else{
        errbox[2].innerHTML=""
    }
}


        // message part  
    
function messagepart(){
    k=Lmesage.value
    if(k.length<10){
        errbox[3].innerHTML="Please enter atleast 10 words"
    }else{
        errbox[3].innerHTML=""
    }
}