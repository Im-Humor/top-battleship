import Ship from "./ship";

export default class Gameboard {
	constructor(size) {
		this.size = size;
		this.boardArray = [];
		this.shipArray = [];
	}

	populate() {
		for (let x = 0; x < this.size; x++) {
			let tempArray = [];
			for (let y = 0; y < this.size; y++) {
				tempArray.push(new Gamesquare());
			}
			this.boardArray[x] = tempArray;
		}
	}

	addShip(ship) {
		//set x and y coordinates based on direction and size
		if (ship.direction == "vertical") {
			for (let x = 0; x < ship.size; x++) {
				ship.xCoords.push(x + ship.startLoc[0]);
			}
			ship.yCoords.push(ship.startLoc[1]);
		} else if (ship.direction == "horizontal") {
			for (let y = 0; y < ship.size; y++) {
				ship.yCoords.push(y + ship.startLoc[1]);
			}
			ship.xCoords.push(ship.startLoc[0]);
		}

		this.shipArray.push(ship);
	}

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

	draw() {}
}

class Gamesquare {
	constructor() {
		this.filled = false;
	}
}
