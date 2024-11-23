// script.js
const facts = [
  "The first film ever made was 'Roundhay Garden Scene' (1888), lasting only 2.11 seconds",
  "The Matrix code was inspired by sushi recipes",
  "The Lion King was the first Disney animated movie with a completely original story",
  "The first Academy Awards ceremony in 1929 lasted only 15 minutes",
  "The Lord of the Rings trilogy took 8 years to make",
];

function displayRandomFact() {
  const factDisplay = document.getElementById("fact-display");
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
}

document
  .getElementById("new-fact")
  .addEventListener("click", displayRandomFact);
// Display initial fact when page loads
window.onload = displayRandomFact;
