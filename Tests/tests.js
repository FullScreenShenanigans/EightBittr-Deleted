var EightBitter;

describe("constructor", function () {
	it("doesn't throw an error by default", function () {
		new EightBittr();
	});
});

describe("reset", function () {
	it("doesn't throw an error by default", function () {
		EightBitter = new EightBittr();
		EightBitter.reset(EightBitter, []);
	});
	
	it("stores customs", function () {
		EightBitter.reset(EightBitter, [], {
			"hello": "world"
		});
		
		chai.expect(EightBitter.customs).to.deep.equal({
			"hello": "world"
		});
	})
	
	it("throws an error if a reset isn't found", function () {
		chai.expect(function () {
			EightBitter.reset(EightBitter, ["test"]);
		}).to.throw("test is missing on a resetting EightBittr.")
	});
	
	it("calls resets", function () {
		var flagOne = false,
			flagTwo = false;
		
		EightBitter.resetOne = function () {
			flagOne = true;
		};
		EightBitter.resetTwo = function () {
			flagTwo = true;	
		};
		
		EightBitter.reset(EightBitter, [
			"resetOne", "resetTwo"
		]);
		
		chai.expect(flagOne).to.be.true;
		chai.expect(flagTwo).to.be.true;
	});
});