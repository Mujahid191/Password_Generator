const upparset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "~!@#$%^&*(";
/* All Variables */
const password_text = document.getElementById("password_text");
const password_length = document.querySelector(".password_length");
const check_box = document.querySelectorAll(".check_box");
const genrate_btn = document.querySelector(".genrate_btn");
const copy_btn = document.querySelector(".copy_password");
/* Password text creator function */
const set_password = (setData) => {
let index_key = Math.floor(Math.random() * setData.length);
let data = setData[index_key];
return data;
};
/* Input Check function */
const password_chractors = (password = "") => {
check_box.forEach((input) => {
    if (input.checked) {
    if (input.classList.contains("uppar_case")) {
        password += set_password(upparset);
    }
    if (input.classList.contains("lower_case")) {
        password += set_password(lowerset);
    }
    if (input.classList.contains("numbers")) {
        password += set_password(numberset);
    }
    if (input.classList.contains("symbols")) {
        password += set_password(symbolset);
    }
    }
});
/* password length checking */
if (password.length < password_length.value) {
    return password_chractors(password);
}
/* password show on Secreen */
password_text.value = truncateString(password, password_length.value);
};
/* password genrate button */
genrate_btn.addEventListener("click", () => {
password_chractors();
});
copy_btn.addEventListener("click", () => {
let copy = navigator.clipboard.writeText(password_text.value);
alert("Password Copied to Clipboard");
});
password_chractors();
/* password length control function */
function truncateString(str, num) {
if (str.length > num) {
    let subStr = str.slice(str, num);
    return subStr;
} else {
    return str;
}
}