const { expect } = require("chai");
const { mocks } = require("../mocks");

it("updates bottom", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { bottom } = thing;
    const newBottom = bottom + 3.5;

    // Act
    physics.setBottom(thing, newBottom);

    // Assert
    expect(thing.bottom).to.be.equal(newBottom);
});

it("adjusts top", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { bottom } = thing;
    const newBottom = bottom + 3.5;
    const newTop = newBottom + thing.height * EightBitter.unitsize;

    // Act
    EightBitter.physics.setBottom(thing, newBottom);

    // Assert
    expect(thing.bottom).to.be.equal(newBottom);
});
