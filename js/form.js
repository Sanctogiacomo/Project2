function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var password = document.Form.password.value;
    var password2 = document.Form.password2.value;
    var gender = document.Form.gender.value;
    

    var nameErr = emailErr = mobileErr = passwordErr = confirmPasswordErr = genderErr = true;
    
    if(name == '' || email == '' || mobile == '' ||  password == '' || password2 == ''){

        swal({
            title:'Field Empty',
            text:'Please enter your details',
            icon:'error',
            button:'ok',
         });
         
            }
            
    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
         var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^[0-9]\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            emailErr = false;
             var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    

    
    if(password == "" ) {
        printError("passwordErr", "Please enter your password");
        var elem = document.getElementById("createPw");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
  } else{
            var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            if(regex.test(password) === false) {
                printError("passwordErr", "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number");
                var elem = document.getElementById("createPw");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else{
                printError("passwordErr", "");
                emailErr = false;
                var elem = document.getElementById("createPw");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");
    
            }
        }
        

    if(password2 == ""){
        printError("confirmPasswordErr", "Please enter your password");
        var elem = document.getElementById("createPw");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else {
        if(password != password2){
        printError("confirmPasswordErr", "Password doesn't match");
        var elem = document.getElementById("confirmPw");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("confirmPasswordErr", "");
        passwordErr = false;
        var elem = document.getElementById("confirmPw");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
}


    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    
    if((nameErr || emailErr || mobileErr || passwordErr || confirmPasswordErr || genderErr) == true) {
  
       return false;
       
    }

};
swal({
    title:'Welcome New User!',
    text:'Please enter your details',
    icon:'error',
    button:'ok',
 });