const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts top", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { height } = thing;
    const newMidY = 3.5;

    // Act
    EightBitter.physics.setMidY(thing, newMidY);

    // Assert
    expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

it("shifts bottom", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { height } = thing;
    const newMidY = 3.5;

    // Act
    EightBitter.physics.setMidY(thing, newMidY);

    // Assert
    expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});
