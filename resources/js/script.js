// Wait 1 ms to start the main
setTimeout(
    main, 
    1
);

function main(){
    // Get input password
    var passwordGenerated = document.getElementById("passwordGenerated");
    // Get clipboard alert
    var clipboardAlert = document.getElementById("successCopyAlert");
    // Get warning alert
    var warningAlert = document.getElementById("warningAlert");
    var lengthInput = document.getElementById("lengthInput");
    // Disable the input (read only)
    passwordGenerated.readOnly = true;
    // Hide Alerts
    clipboardAlert.style.display = "none";
    warningAlert.style.display = "none";
    lengthInput.value = 12
};

