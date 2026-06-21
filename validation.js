emailjs.init("JCkRGTi9AT9Rpl4kY");

const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const company =
        document.getElementById("company").value.trim();

    const budget =
        document.getElementById("budget").value.trim();

    const message =
        document.getElementById("message").value.trim();

    // Validation 1
    if(name.length < 3){
        errorMsg.innerHTML =
        "Name must contain at least 3 characters";
        return;
    }

    // Validation 2
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        errorMsg.innerHTML =
        "Enter valid email address";
        return;
    }

    // Validation 3

const mobilePattern = /^[6-9]\d{9}$/;

if(!mobilePattern.test(mobile)){
    errorMsg.style.color = "red";
    errorMsg.innerHTML =
    "Mobile number must start with 6-9 and contain 10 digits";
    return;
}

    // Validation 4
    if(company.length < 2){
        errorMsg.innerHTML =
        "Enter company name";
        return;
    }

    // Validation 5
    if(budget <= 0){
        errorMsg.innerHTML =
        "Enter valid budget";
        return;
    }

    // Validation 6
    if(message.length < 20){
        errorMsg.innerHTML =
        "Message must be at least 20 characters";
        return;
    }

    emailjs.send(
    "service_pdvfc9b",
    "template_ag0avrm",
    {
        name: name,
        email: email,
        mobile: mobile,
        company: company,
        budget: budget,
        message: message
    }
)
.then(function () {

    errorMsg.style.color = "lightgreen";

    errorMsg.innerHTML =
        "Enquiry Sent Successfully!";

    form.reset();

})
.catch(function (error) {

    errorMsg.style.color = "red";

    errorMsg.innerHTML =
        "Failed to send enquiry.";

    console.log(error);

});
});