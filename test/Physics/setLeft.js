const { expect } = require("chai");
const { mocks } = require("../mocks");

it("sets left", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { top } = thing;
    const newLeft = 3.5;

    // Act
    physics.setLeft(thing, newLeft);

    // Assert
    expect(thing.left).to.be.equal(newLeft);
});

it("adjusts right", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const newLeft = 3.5;
    const newRight = newLeft + thing.width * EightBitter.unitsize;

    // Act
    EightBitter.physics.setLeft(thing, newLeft);

    // Assert
    expect(thing.right).to.be.equal(newRight);
});