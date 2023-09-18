const userMult = parseInt(prompt("Enter a number to get it's multiplication table:"));

if (!isNaN(userMult)){
    alert(`View the console to see the multiplication table for ${userMult}!`)
    for(let i = 1; i <= 10; i++){
        const result = userMult * i;
        console.log(`${userMult} x ${i} = ${result}`);
    }
} else{
    console.log("Invalid input. Please enter a valid number.")
}