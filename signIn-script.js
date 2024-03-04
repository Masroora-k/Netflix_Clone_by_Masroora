$(document).ready(function(){
    var email = $("#floatingInputInvalid");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneNo = /^\d{10}$/;

    $("#signIn_btn").click(function(event) {
       
        event.preventDefault();

       
        var emailValue = email.val().trim();

       
        if (emailValue === "") {
            $("#error_emailPhone").html("\u2297 Please enter a valid email address.");
            email.css("border", "1px solid red");
            $("#password_section").css("margin-top", "36px"); 
            return;
        }

       
    });

    $("#floatingInputInvalid").on('input', function() {
        validateEmail();
    });

    function validateEmail() {
        if (!email.val().match(emailPattern) && !email.val().match(phoneNo)) {
            $("#error_emailPhone").html("\u2297 Please enter a valid email address.");
            email.css("border", "1px solid red");
            $("#password_section").css("margin-top", "36px"); 
        } else {
            $("#error_emailPhone").html("");
            email.css("border", "1px solid #767373 ");
            $("#password_section").css("margin-top", ""); 
        }
    }  
});



$(document).ready(function(){
    var password = $("#floatingPassword");

    $("#signIn_btn").click(function(event) {
        
        event.preventDefault();

        var passwordValue = password.val().trim();

        
        if (passwordValue === "") {
            $("#error_password").html("\u2297 Your password must contain between 4 and 60 characters.");
            password.css("border", "1px solid red");
            $("#submit_btn").css("margin-top", "50px");
            return;
        }

       
    });


    $("#floatingPassword").on('input', function() {
        validatePassword();
    });

    function validatePassword() {
        var passwordValue = password.val();
        if (passwordValue.length < 4 || passwordValue.length > 60) {
            $("#error_password").html("\u2297 Your password must contain between 4 and 60 characters.");
            password.css("border", "1px solid red");
            $("#submit_btn").css("margin-top", "50px");
        } else {
            $("#error_password").html("");
            password.css("border", "1px solid #767373 ");
            $("#submit_btn").css("margin-top", "");
        }
    } 
});
