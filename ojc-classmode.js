class orangeControl {
    constructor(startedWith, result, food) {
        this.startedWith = startedWith;
        this.result = result;
        this.food = food;
    }

    static addTwo(x, y, z) {
		const a = x;
		const b = y;
		const c = z;
		return { result: (a + b), food: ('' + c) };
    }
}
