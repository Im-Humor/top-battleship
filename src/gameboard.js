import Ship from "./ship";

export default class Gameboard {
	constructor(size, parentID, playerName) {
		this.size = size;
		this.boardArray = [];
		this.shipArray = [];
		this.parentID = parentID;
		this.playerName = playerName;
		this.populate();
	}

	populate() {
		for (let x = 0; x < this.size; x++) {
			let tempArray = [];
			for (let y = 0; y < this.size; y++) {
				tempArray.push(new Gamesquare());
			}
			this.boardArray[x] = tempArray;
		}
		this.fillShips();
		this.draw();
	}

	//adds ship to array of ships in gameboard
	//and sets the coordinates they take up within their ship object
	addShip(ship) {
		//set x and y coordinates based on direction and size
		if (ship.direction == "horizontal") {
			for (let x = 0; x < ship.size; x++) {
				ship.xCoords.push(parseInt(x) + ship.startLoc[0]);
			}
			ship.yCoords.push(ship.startLoc[1]);
		} else if (ship.direction == "vertical") {
			for (let y = 0; y < ship.size; y++) {
				ship.yCoords.push(parseInt(y) + ship.startLoc[1]);
			}
			ship.xCoords.push(ship.startLoc[0]);
		}

		this.shipArray.push(ship);
		this.fillShips();
		this.draw();
	}

	//updates gameboard object with ship coordinates
	fillShips() {
		for (let i = 0; i < this.shipArray.length; i++) {
			for (let j = 0; j < this.shipArray[i].xCoords.length; j++) {
				for (let k = 0; k < this.shipArray[i].yCoords.length; k++) {
					this.boardArray[this.shipArray[i].xCoords[j]][
						this.shipArray[i].yCoords[k]
					].filled = true;
				}
			}
		}
	}

	//takes in gameboard HTML id and draws gameboard with properties
	draw() {
		const parentHTML = document.getElementById(this.parentID);
		parentHTML.innerHTML = "";
		for (let x = 0; x < this.boardArray.length; x++) {
			let newColumn = document.createElement("div");
			newColumn.classList.add("game-column");
			newColumn.setAttribute("pos", x);
			parentHTML.appendChild(newColumn);
			for (let y = 0; y < this.boardArray[x].length; y++) {
				let newPiece = document.createElement("div");
				newPiece.classList.add("game-piece");
				newPiece.setAttribute("pos", y);
				let selection = this.boardArray[x][y];
				if (selection.filled == true && selection.hit == false) {
					newPiece.classList.add("filled-piece");
				} else if (selection.filled == false && selection.hit == true) {
					newPiece.classList.add("missed-piece");
				} else if (selection.filled == true && selection.hit == true) {
					newPiece.classList.add("hit-piece");
				}
				newColumn.appendChild(newPiece);
			}
		}
	}
	//function that takes in gameboard and coordinates
	//and updates gamesquare at coordinates
	hitSquare(x, y) {
		for (let j = 0; j < this.boardArray.length; j++) {
			for (let k = 0; k < this.boardArray[j].length; k++) {
				if (x == j && y == k) {
					// set conditions for what to do when coordinates are selected
					let selection = this.boardArray[x][y];
					if (selection.hit == false) {
						selection.hit = true;
					}
				}
			}
		}
		this.draw();
		//after square is attacked, check if any squares remain
		//if not, declare winner
		this.gameCheck();
	}

	gameCheck() {
		let winStatus = true;
		for (let x = 0; x < this.boardArray.length; x++) {
			for (let y = 0; y < this.boardArray[x].length; y++) {
				let selection = this.boardArray[x][y];
				if (selection.filled == true && selection.hit == false) {
					winStatus = false;
				}
			}
		}
		if (winStatus == true) {
			alert(`${this.playerName} has lost!`);
		}
	}
}

class Gamesquare {
	constructor() {
		this.filled = false;
		this.hit = false;
	}
}
