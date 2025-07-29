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
    textResult.innerHTML = palindromeResultMessage(cleanInput(textInput.value)); 
}

function isPalindrome(str) {
    const wordArray = [...str];
    const arrayLength = wordArray.length;
    if (arrayLength === 1) {
        return true;
    } else if (arrayLength%2 === 1) {
        for (let i = 0; i<Math.ceil(arrayLength/2); i++) {
            if (wordArray[i]!==wordArray[arrayLength-1-i]) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i<arrayLength/2; i++) {
            if (wordArray[i]!==wordArray[arrayLength-1-i]) {
                return false;
            }
        }
        return true;
    }
}

function palindromeResultMessage(str) {
    if (isPalindrome(str)) {
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
