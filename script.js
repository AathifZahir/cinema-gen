const facts = [
  "The first film ever made was 'Roundhay Garden Scene' (1888), lasting only 2.11 seconds",
  "The Matrix code was inspired by sushi recipes",
  "The Lion King was the first Disney animated movie with a completely original story",
  "The first Academy Awards ceremony in 1929 lasted only 15 minutes",
  "The Lord of the Rings trilogy took 8 years to make",
  "The roar of the T-Rex in Jurassic Park was created by combining the sounds of various animals including tigers, elephants, and alligators",
  "The iconic 'Wilhelm Scream' sound effect has been used in over 400 films and TV series",
  "The film 'Toy Story' was the first ever fully computer-animated feature film",
  "The movie 'Titanic' cost more to make than the actual Titanic ship",
  "The famous 'I'll be back' line from The Terminator was originally scripted as 'I'll come back'",
  "The entire Lord of the Rings trilogy was filmed simultaneously in New Zealand",
  "The Godfather was the first sequel to win the Academy Award for Best Picture",
];

function displayRandomFact() {
  const factDisplay = document.getElementById("fact-display");
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.classList.remove("new-fact");
  // Trigger reflow
  void factDisplay.offsetWidth;
  factDisplay.classList.add("new-fact");
  factDisplay.textContent = facts[randomIndex];
}

document
  .getElementById("new-fact")
  .addEventListener("click", displayRandomFact);
// Display initial fact when page loads
window.onload = displayRandomFact;

// Get the share button element
const shareButton = document.getElementById("share-fact");
const factText = document.getElementById("fact-text");

// Add click event listener to the share button
shareButton.addEventListener("click", async () => {
  const textToShare = factText.textContent;

  // Check if Web Share API is supported
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Cinema Fact",
        text: textToShare,
        url: window.location.href,
      });
      console.log("Content shared successfully");
    } catch (err) {
      console.log("Error sharing:", err);
    }
  } else {
    // Fallback to clipboard copying
    try {
      await navigator.clipboard.writeText(textToShare);

      // Provide visual feedback
      const originalText = shareButton.textContent;
      shareButton.textContent = "Copied!";

      // Reset button text after 2 seconds
      setTimeout(() => {
        shareButton.textContent = originalText;
      }, 2000);
    } catch (err) {
      console.log("Error copying to clipboard:", err);
      alert("Unable to share. Please try copying the text manually.");
    }
  }
});
