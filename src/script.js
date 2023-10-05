import "./style.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship";

let gameboard = new Gameboard(5);
gameboard.populate();

gameboard.addShip(new Ship(2, "vertical", [1, 1]));
gameboard.fillShips();

console.log(gameboard);
