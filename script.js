const quizBuffer = {
  "heart": "❤️",
  "tick": "✅",
  "cross": "❌",
  "burger": "🍔",
  "watermelon": "🍉",
  "cry": "😭",
  "sad": "😔"
};

function onLoadPage() {
  const bufferValues = Object.values(quizBuffer);
  document.getElementById("emojis").innerHTML = bufferValues.join("");
}

function startQuiz() {
  const bufferKeys = Object.keys(quizBuffer);
  const randomIndex = Math.floor(Math.random() * bufferKeys.length);
  
  const answer = bufferKeys[randomIndex];
  const icon = quizBuffer[answer];

  // Debug
  console.log("Buffer: " + Object.keys(quizBuffer) + ", Random Index Result: " + randomIndex);
  console.log("Index: " + randomIndex + ", Answer: " + answer + ", Icon: " + icon);
  
  const guess = prompt(`What does this ${icon} stand for?`);

  if (guess.toLowerCase() === answer.toLowerCase())
    alert("You've guessed correctly!");
  else
    alert(`Sorry, the correct answer was ${answer.slice(0, 1).toUpperCase() + answer.substring(1)}.`);
}