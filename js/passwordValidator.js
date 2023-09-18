let setPassword;
let confirmPassword;
let attempts = 3;

setPassword = prompt("Set your password:");

do {
    confirmPassword = prompt("Confirm your password:");

    if(setPassword !== confirmPassword){
        alert("Passwords do not match. Please try again.");
        attempts--;
    }

    if(attempts === 0){
        alert("You've exceed the maximum number of attemps. Please restart.");
        break;
    }
} while(setPassword !== confirmPassword);

if(setPassword === confirmPassword){
    alert("Password has been set successfully!");
}