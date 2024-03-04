$(document).ready(function(){
    var email = $("#email_section");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    $("#getStart_btn").click(function(event) {
        
        event.preventDefault();

       
        var emailValue = email.val().trim();

       
        if (emailValue === "") {
            
           $('#email_section').focus();
            return;
        }

        
    });
 
    email.on('input', function() {
        validateEmail();
    });

    function validateEmail() {
        var emailValue = email.val().trim();

        if (!emailValue.match(emailPattern)) {
            $("#email_error").html("\u2297 Email is required");
            email.css("border", "1px solid red");
            
        } else {
            $("#email_error").html("");
            email.css("border", "1px solid green");
        }
    }
});




$(document).ready(function(){
    var email = $("#email_section2");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    $("#getStart_btn2").click(function(event) {
       
        event.preventDefault();

        
        var emailValue = email.val().trim();

       
        if (emailValue === "") {
            
           $('#email_section2').focus();
            return;
        }

        
    });

    email.on('input', function() {
        validateEmail();
    });

    function validateEmail() {
        var emailValue = email.val().trim();

        if (!emailValue.match(emailPattern)) {
            $("#email_error2").html("\u2297 Email is required");
            email.css("border", "1px solid red");
        } else {
            $("#email_error2").html("");
            email.css("border", "1px solid green");
        }
    }
});
