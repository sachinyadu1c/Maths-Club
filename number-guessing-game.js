let secretNo = Math.floor(Math.random()*15) + 1;

let guess ;
let attempts=0;

while(guess !== secretNo){ 
    guess = Number(prompt(`Guess any number btw 1 to 15 : `));
    attempts++;

    if(guess < 1 || guess > 16){
        alert("\u274C Number not come within the range from 1 to 15");
    }

    if(guess > secretNo){
        alert("Too high! Try again.");
    }
    else if(guess < secretNo){
        alert("Too low! Try again.");
    }
    else if(guess == secretNo){
        alert(` \u{1F389} Correct! You guessed at in ${attempts} attempt.`);
        console.log("END GAME");
        break;
    }else{
        alert("Wrong entry! Try again.");
    }
}
