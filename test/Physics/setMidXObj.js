const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts left", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;

    EightBitter.physics.setMidX(positioner, newMidX);

    // Act
    EightBitter.physics.setMidXObj(thing, positioner);

    // Assert
    expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});

it("shifts right", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;

    EightBitter.physics.setMidX(positioner, newMidX);

    // Act
    EightBitter.physics.setMidXObj(thing, positioner);

    // Assert
    expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});
