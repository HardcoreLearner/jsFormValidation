const mail = document.getElementById("mail");
const zip = document.getElementById("zip");
const pass = document.getElementById("pass1");
const passConf = document.getElementById("pass2");
const validation = document.getElementById("btn");
const form = document.getElementById("formidable");
const validMess = document.getElementById("validMess");

function checkMail() {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.value == "") {
        mail.setCustomValidity("* This field is mandatory !");
    }
    else if (emailRegExp.test(this.value)) {
        mail.setCustomValidity("");
    } else {
        mail.setCustomValidity("Provide a correct email address !");
    }
}

function checkZip() {
    const zipRegExp = /^[0-9]{5}$/;
    if (this.value == "") {
        zip.setCustomValidity("* This field is mandatory !");
    } else if (zipRegExp.test(this.value)) {
        zip.setCustomValidity("");
    } else {
        console.log(this, this.value, zipRegExp.test(this.value));
        zip.setCustomValidity("Provide a correct French Zip Adress !");
    }
}

function checkPass() {
    const passRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$/;
    if (this.value == "") {
        pass.setCustomValidity("* This field is mandatory !");
    }else if (passRegExp.test(this.value)) {
        pass.setCustomValidity("");
    } else {
        pass.setCustomValidity("Your password must be 10 characters long minimum, and contain at least a number and a special character !");
    }
}

function checkPassConf() {
    if (this.value == "") {
        passConf.setCustomValidity("* This field is mandatory !");
    }else if (this.value == pass.value && pass.value.length != 0) {
        passConf.setCustomValidity("");
    } else if (pass.value.length = 0) {
        passConf.setCustomValidity("You must provide a password first before confirming !");
    } else if (this.value != pass.value ) {
        passConf.setCustomValidity("Your two passwords need to match !");
    } else {
        passConf.setCustomValidity("Your two passwords need to match and you need to provide a password first before confirming !");
    }
}

function checkForm(e) {
    e.preventDefault();
    form.checkValidity();
}

function formValidation(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        validMess.textContent = "High Five !";
    } else {
        validMess.textContent = "You must fill the form completely and well !";
    }
}

mail.addEventListener('input', checkMail);
zip.addEventListener('input', checkZip);
pass.addEventListener('input', checkPass);
passConf.addEventListener('input', checkPassConf);
validation.addEventListener('click', formValidation)
