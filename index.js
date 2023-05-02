const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector("#number").textContent = secretNumber;

document.querySelector(".click").addEventListener("click", function () {
  const guessNum = Number(document.querySelector("#guess").value);
  console.log(guessNum, typeof guessNum);
  if (!guessNum) {
    document.querySelector("#message").textContent = "🔕 No number";
  } else if (guessNum === secretNumber) {
    document.querySelector("#message").textContent = "😊 Correct Number.";
  } else if (guessNum > secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent = "📈 Too High.";
      score--;
      document.querySelector(".score").textContent = `📉 Score: ${score}`;
    } else {
      document.querySelector("#message").textContent =
        "😢 Sorry you Lost The Game ";
      document.querySelector(".score").textContent = `📩 Score: 0`;
    }
  } else if (guessNum < secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent = "📉 Too Low.";
      score--;
      document.querySelector(".score").textContent = `📉 Score: ${score}`;
    } else {
      document.querySelector("#message").textContent =
        "😢 Sorry you Lost The Game ";
      document.querySelector(".score").textContent = `📩 Score: 0`;
    }
  }
});
// console.log(document.querySelector("."));
