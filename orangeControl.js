function newThing (startedWith, result, food) {
    this.startedWith = startedWith,
	this.addition = result;
	this.food = food;
}
var orangeControl = new newThing(0, 169, "oranges");
addTwo(orangeControl.startedWith, orangeControl.addition, orangeControl.food);
//enjoy some oranges.
