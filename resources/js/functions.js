// Function for copy password with button clipboard
function copyClipboard(){
    // Get the text field
    var copyText = document.getElementById("passwordGenerated");
    if(!copyText.value == ""){
        // Select the text field
        copyText.select();
        // Select for mobile devices
        copyText.setSelectionRange(0, 99999);
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        // Get Clipboard Alert
        var clipboardAlert = document.getElementById("successCopyAlert");
        clipboardAlert.style.display = "block";
        setTimeout(
            function(){
                clipboardAlert.style.display = "none";
            }, 5000
        );
    }
    
}

function generatePassword(){
    var passwordGenerated = document.getElementById("passwordGenerated");
    var warningAlert = document.getElementById("warningAlert");
    var lengthInput = document.getElementById("lengthInput");
    var symbolsCheck = document.getElementById("symbolsCheck")
    var numbersCheck = document.getElementById("numbersCheck")
    var upperCheck = document.getElementById("upperCheck")

    var password = ''
    var lowerChars = "abcdefghijklmnopqrstuvwxyz"
    var symbolChars = "!@#$%^&*()_+ñ"
    var numberChars = "0123456789"
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = lengthInput.value

    var chars = lowerChars
    if(symbolsCheck.checked){
        chars += symbolChars
    }
    if(numbersCheck.checked){
        chars += numberChars
    }
    if(upperCheck.checked){
        chars += upperChars
    }

    console.log(chars)

    if(lengthInput.value > 20 || lengthInput.value < 5){
        warningAlert.style.display = "block";
        setTimeout(
            function(){
                warningAlert.style.display = "none";
            }, 5000
        );
    }else{
        for (var i=0;i<passwordLength;i++){
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordGenerated.value = password
    }
}