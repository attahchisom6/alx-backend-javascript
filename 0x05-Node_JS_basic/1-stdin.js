const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("Welcome to Holberton School, what is your name?");

rl.on('line', (name) => {
  if (name.toLowerCase() == "exit" || name.toLowerCase() == "quit") {
    console.log("This important software is now closing");
    rl.close();
  }
  console.log(`Your name is: ${name}`);
  console.log("Welcome to Holberton School, what is your name?");

});

// listen for closing event
rl.on('close', () => {
  process.exit(0);
})
