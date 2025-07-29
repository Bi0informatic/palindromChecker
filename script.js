const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textResult = document.getElementById("result");

//alerts page if input is empty
function ifInvalidInput() {
    if (!cleanInput(textInput.value)) {
        alert("Please input a value");
        return;
    }
}

//removes all non-alphanumeric characters (punctation, spaces, and symbols), turns every character to lower
function cleanInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

//checks if valid then if palindrome
function onSubmit() {
    ifInvalidInput();
    textResult.innerHTML = palindromeResultMessage(textInput.value); 
}

function isPalindrome(str) {
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}

function palindromeResultMessage(str) {
    if (isPalindrome(cleanInput(str))) {
        return `${str} is a palindrome`
    } else {
        return `${str} is not a palindrome`
    }
}

checkButton.addEventListener("click", onSubmit);
textInput.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        e.preventDefault();
        checkButton.click();
    }
})
