var directions = "The rules of the game are simple. Create a silly story by filling in the prompts with random answers. When you're ready, refresh the page to start the game!"

document.write(directions);

alert('Hello! We\'re going to play a game of Mad Libs together.');

var confirmation = "Are you ready? If so, click OK! If not, then click cancel and read the directions on how to play."

confirm(confirmation);

var color1 = prompt("Name a Color");
console.log(color1);

var superlative = prompt("Now, a Superlative (Ending in -est)");
console.log(superlative);

var adjective1 = prompt("Great! How about an adjective?");
console.log(adjective1);

var bodyparts = prompt("Got it. Now I need some body parts (plural)");
console.log(bodyparts);

var bodypart = prompt("Okay! How about a body part (singular)?");
console.log(bodypart);

var noun = prompt("How about an noun?");
console.log(noun);

var animals = prompt("How about some animals (plural)?");
console.log(animals);

var adjective2 = prompt("Okay, give me another adjective.");
console.log(adjective2);

var adjective3 = prompt("Okay, give me *another* adjective.");
console.log(adjective3);

var adjective4 = prompt("Last one! Give me yet another adjective!");
console.log(adjective4);

var answer = "<h2>The " + color1.toLowerCase() + " dragon is the ";
answer += superlative.toLowerCase() + " dragon of all! It has " + adjective1.toLowerCase() + " ";
answer += bodyparts.toLowerCase() + " and a ";
answer += bodypart.toLowerCase() + " shaped like a ";
answer += noun.toLowerCase() + ". It loves to eat ";
answer += animals.toLowerCase() + ", although it will feast on just about anything. It is ";
answer += adjective2.toLowerCase() + " and ";
answer += adjective3.toLowerCase() + ". You must be ";
answer += adjective4.toLowerCase() + " around it, or you may end up as its meal!</h2>"

document.write("<br><br>");
document.write(answer);
