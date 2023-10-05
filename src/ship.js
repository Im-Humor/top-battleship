export default class Ship {
	constructor(size, direction, startLoc = [0, 0]) {
		this.size = size;
		this.direction = direction;
		this.startLoc = startLoc;
		this.xCoords = [];
		this.yCoords = [];
	}
}
