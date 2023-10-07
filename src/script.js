import "./style.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship";

let gameboard1 = null;
let gameboard2 = null;
let randShipArray = [4, 3, 2, 1];

const startButton = document.getElementById("start-button");
const playerNameInput = document.getElementById("player-name-input");
const boardSizeInput = document.getElementById("board-size-input");
const shipSizeInput = document.getElementById("ship-size-input");
const shipDirectionInput = document.getElementById("ship-direction-input");
const shipLocX = document.getElementById("ship-loc-x");
const shipLocY = document.getElementById("ship-loc-y");
const shipAddButton = document.getElementById("ship-add-button");
const shipHitButton = document.getElementById("hit-button");
const hitLocX = document.getElementById("hit-loc-x");
const hitLocY = document.getElementById("hit-loc-y");

startButton.addEventListener("click", (event) => {
	gameboard1 = new Gameboard(
		boardSizeInput.value,
		"game1",
		playerNameInput.value
	);
	gameboard2 = new Gameboard(boardSizeInput.value, "game2", "CPU");
	document.querySelector(".start").innerHTML = "";
	gameboard2.addShip(new Ship(2, "vertical"));
});

shipAddButton.addEventListener("click", (event) => {
	gameboard1.addShip(
		new Ship(shipSizeInput.value, shipDirectionInput.value, [
			parseInt(shipLocX.value),
			parseInt(shipLocY.value),
		])
	);
});

shipHitButton.addEventListener("click", (event) => {
	gameboard2.hitSquare(hitLocX.value, hitLocY.value);
});
