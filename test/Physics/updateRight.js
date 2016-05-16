const { expect } = require("chai");
const { mocks } = require("../mocks");

it("updates right", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { right } = thing;
    const newRight = thing.right + 3.5;

    // Act
    physics.setRight(thing, newRight);

    // Assert
    expect(thing.right).to.be.equal(newRight);
});

it("adjusts left", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { right } = thing;
    const newRight = right + 3.5;
    const newLeft = newRight - thing.width * EightBitter.unitsize;

    // Act
    EightBitter.physics.setRight(thing, newRight);

    // Assert
    expect(thing.left).to.be.equal(newLeft);
});
