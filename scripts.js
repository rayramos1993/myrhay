$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
$("#contactForm")[0].reset();
submitMSG(true, "Message Submitted!")

function submitMSG(valid, msg){
    var msgClasses;
if(valid){
    msgClasses = "h3 text-center tada animated text-success";
} else {
    msgClasses = "h3 text-center text-danger";
}
$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}