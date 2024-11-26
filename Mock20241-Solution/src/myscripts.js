var number_to_guess;
function GuessNumber(){
    number_to_guess=prompt("Enter a number");
    guess=prompt("Enter your guess");
    while(guess != number_to_guess){
if(guess>number_to_guess)
window.alert("The hidden number is smaller");
else 
window.alert("The hidden number is bigger");
guess=prompt("Enter your guess"); 
}
    
    document.write("Well Done! " );
}