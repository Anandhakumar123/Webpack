const _ = require("lodash");
import "./styles/style.scss";
import jokeImg from "./assets/joke.svg";
import generateJoke from "./generateJoke.js";

const laughImg = document.getElementById("laughImg");

laughImg.src = jokeImg;

generateJoke();

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
console.log(_.chunk([1, 4, 5, 6, 7, 8], 2));
