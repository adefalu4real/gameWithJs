let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".click").addEventListener("click", function () {
  const guessNum = Number(document.querySelector("#guess").value);
  console.log(guessNum, typeof guessNum);
  if (!guessNum) {
    document.querySelector("#message").textContent = "🔕 No number";
  } else if (guessNum === secretNumber) {
    document.querySelector("#message").textContent = "😊 Correct Number.";
    document.querySelector("#number").textContent = secretNumber;
    document.querySelector(".questionNumberIcon").style.width = "180px";
    document.querySelector(".questionNumberIcon").style.height = "180px";
    if (score > highScore) {
      highScore = score;
      document.querySelector("#highScore").textContent = highScore;
    }
    let name = prompt("Enter your Name: ");
    document.querySelector("body").style.backgroundColor = "rgb(5, 97, 29)";
    document.querySelector(
      ".name"
    ).textContent = `${name}: congratulations 🎉 You win this game`;
  }
  if (guessNum !== secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent =
        guessNum > secretNumber ? "📈 Too High." : "📉 Too Low.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("#message").textContent =
        "😢 Sorry you Lost The Game ";
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //   else if (guessNum > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector("#message").textContent = "📈 Too High.";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector("#message").textContent =
  //         "😢 Sorry you Lost The Game ";
  //       document.querySelector(".score").textContent = `📩 Score: 0`;
  //     }
  //   } else if (guessNum < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector("#message").textContent = "📉 Too Low.";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector("#message").textContent =
  //         "😢 Sorry you Lost The Game ";
  //       document.querySelector(".score").textContent = "💯 Score: 20";
  //     }
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("#message").textContent = "Start guessing....";
  document.querySelector("body").style.backgroundColor = "rgb(5, 125, 136)";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".questionNumberIcon").textContent = "?";
  document.querySelector(".questionNumberIcon").style.width = "150px";
  document.querySelector(".questionNumberIcon").style.height = "150px";
  document.querySelector("#guess").value = "";
  document.querySelector(".name").textContent = "";
  document.querySelector(".score").textContent = score;
});
// console.log(document.querySelector("."));
