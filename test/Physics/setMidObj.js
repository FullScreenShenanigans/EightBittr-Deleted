const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts top", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const { height } = thing;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

it("shifts right", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});

it("shifts bottom", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const { height } = thing;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});

it("shifts left", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const { width } = thing;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});
