// Function for copy password with button clipboard
function copyClipboard(){
    // Get the text field
    var copyText = document.getElementById("passwordGenerated");
    // Select the text field
    copyText.select();
    // Select for mobile devices
    copyText.setSelectionRange(0, 99999);
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    alert("The password has been copied");
}

// Function change state button if input changes
function changeStateButton() {
    if(document.getElementById("passwordGenerated").value === ""){
        document.getElementById("buttonClipboard").disabled = true; 
    }else{
        document.getElementById("buttonClipboard").disabled = false;
    }
}