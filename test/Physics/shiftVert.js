const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts vertically", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { top, bottom } = thing;
    const amount = 7;

    // Act
    physics.shiftVert(thing, amount);

    // Assert
    expect(thing.top).to.be.equal(top + amount);
    expect(thing.bottom).to.be.equal(bottom + amount);
});

it("doesn't shift horizontally", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { left, right } = thing;

    // Act
    physics.shiftVert(thing, 7);

    // Assert
    expect(thing.left).to.be.equal(left);
    expect(thing.right).to.be.equal(right);
});
