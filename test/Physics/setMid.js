const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts top", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { height } = thing;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

it("shifts right", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});

it("shifts bottom", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { height } = thing;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});

it("shifts left", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});
