const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
const inputField = document.querySelector("input");
const timeText = document.querySelector(".time b");

let corretWord;
let timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerHTML = maxTime);
    }

    clearInterval(timer);
    alert(`Time off! ${corretWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerHTML = wordArray.join("");
  hintText.innerHTML = randomObj.hint;
  corretWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", corretWord.length);
};

initGame();

const checkword = () => {
  let userWord = inputField.value.toLowerCase();

  if (!userWord) return alert("Please enter a word check");
  if (userWord !== corretWord)
    return alert(`Oops! ${userWord} is not a correct word`);

  alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkword);
