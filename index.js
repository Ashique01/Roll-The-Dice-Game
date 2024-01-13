function rollDice() {
  const diceInput = document.getElementById("diceInput").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  let values = [];
  let images = [];

  for (let i = 0; i < diceInput; i++) {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    values.push(randomNum);
    images.push(
      `<img src="/images/dice-${randomNum}.png" alt="Dice-${randomNum}"/>`
    );
  }

  diceResult.textContent = `dice : ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
