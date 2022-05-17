            $('#submit').click(function(){
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var password = $("#createPw").val();
            var password2 = $("#confirmPw").val();
    
        if(name == '' || email == '' || mobile == '' ||  password == '' || password2 == ''){

            swal({
                title:'Field Empty',
                text:'Please enter your details',
                icon:'error',
                button:'ok',
             });
                }else{
            
                    swal({
                  title: "Good job!",
                  text: "You have successfully registered!",
                  icon: "success",
                  timer:5000
            });
            
                }


    });

