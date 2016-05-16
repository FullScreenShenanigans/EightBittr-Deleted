const { expect } = require("chai");
const { mocks } = require("../mocks");

it("updates top", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const { top } = thing;
    const newTop = top + 3.5;

    // Act
    physics.setTop(thing, newTop);

    // Assert
    expect(thing.top).to.be.equal(newTop);
});

it("adjusts bottom", () => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const { top } = thing;
    const newTop = top + 3.5;
    const newBottom = newTop + thing.height * EightBitter.unitsize;

    // Act
    EightBitter.physics.setTop(thing, newTop);

    // Assert
    expect(thing.bottom).to.be.equal(newBottom);
});
