// Wait 1 ms to start the main
setTimeout(
    main, 
    1
);

function main(){
    // Get input password
    let passwordGenerated = document.getElementById("passwordGenerated");
    // Get clipboard button
    let buttonClipboard = document.getElementById("buttonClipboard"); 
    // Disable the input (read only)
    passwordGenerated.readOnly = true;
    // Disable clipboard button
    buttonClipboard.disabled = true;
    /* 
    // Add event listener for check output password changes and changes 
    // state clipboard button to enable
    */
    passwordGenerated.addEventListener("change", changeStateButton);
};

