const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// first we need to create an empty associative array (aka JS Object)
var numbers = {};

// now we can build our program
var checkNumber = function() {
  rl.question('Your ticket number: ', (answer) => {

    // if we want to check all the tickets and find the cheater then type "check"
    if (answer === "check") {
      for (var key in numbers) {
        if (numbers[key] === 1) {
          console.log("The cheater is: " + key);
          rl.close();
        }
      }

    // if we type anything else it will be considered to be a ticket number
    } else {
      if (!numbers[answer]) {
        numbers[answer] = 1;
        console.log("Welcome! Your partner is not here yet");
      } else if (numbers[answer] == 1) {
        numbers[answer] = 2;
        console.log("Welcome! Your partner is already here");
      } else if (numbers[answer] == 2) {
        console.log("Sorry, both tickets have been used");
      }
      checkNumber();
    }
  });
};

// and now we call our program
checkNumber();
