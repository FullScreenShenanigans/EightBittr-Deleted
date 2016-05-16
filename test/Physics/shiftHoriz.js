const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts horizontally", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { left, right } = thing;
    const amount = 7;

    // Act
    physics.shiftHoriz(thing, amount);

    // Assert
    expect(thing.left).to.be.equal(left + amount);
    expect(thing.right).to.be.equal(right + amount);
});

it("doesn't shift vertically", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { top, bottom } = thing;

    // Act
    physics.shiftHoriz(thing, 7);

    // Assert
    expect(thing.top).to.be.equal(top);
    expect(thing.bottom).to.be.equal(bottom);
});
