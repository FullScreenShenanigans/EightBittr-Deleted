const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts left", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;

    // Act
    EightBitter.physics.setMidX(thing, newMidX);

    // Assert
    expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});

it("shifts right", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;

    // Act
    EightBitter.physics.setMidX(thing, newMidX);

    // Assert
    expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});
