const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-_><?/";
const allChars = upperCase + lowerCase + number + symbol;
const savedPasswords = []; 
const passwordEntry=document.querySelector("password-entry");

const showButton = document.querySelector("#show-button");
const savedData = document.querySelector(".saved-data");
const hideButton = document.querySelector("#hide-button");

showButton.addEventListener("click", showHistory);
hideButton.addEventListener("click", hideHistory);

function showHistory() {
    savedData.style.display = "block";
    const entryPassword=document.createElement("p");
    let img = document.createElement("img");
    entryPassword.className="password-entry";
    img.src="images/copy.png";
    passwordEntry.appendChild(passwordBox).appendChild(img);
   


}

function hideHistory() {
    savedData.style.display = "none";
}

function updateStorage() {
    localStorage.setItem("passwords", JSON.stringify(savedPasswords)); 
}

function savePassword(password) {
    savedPasswords.push(password); 
    updateStorage(); 
}

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    savePassword(password); 
}

const myButton = document.getElementById("mybutton");
myButton.addEventListener("click", createPassword);

const copyPasswordImg = document.querySelector(".copy-password");
copyPasswordImg.addEventListener("click", copyPassword);

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}


function loadPasswords() {
    const storedPasswords = JSON.parse(localStorage.getItem("passwords"));
    if (storedPasswords) {
        savedPasswords.push(...storedPasswords);
    }
}

loadPasswords(); 

