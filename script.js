// Select all emoji buttons and display elements
const emojis = document.querySelectorAll(".emoji");
const selectedEmoji = document.querySelector(".selected-emoji");
const motivationalMessage = document.querySelector(".motivational-message");

// Add click event listener to each emoji button
emojis.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    // Get the emoji and its message
    const emojiCharacter = emoji.textContent;
    const message = emoji.getAttribute("data-message");

    // Update display area
    selectedEmoji.textContent = emojiCharacter;
    motivationalMessage.textContent = message;
  });
});
