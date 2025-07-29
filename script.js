const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

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
}

checkButton.addEventListener("click", onSubmit);
textInput.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        e.preventDefault();
        checkButton.click();
    }
})
