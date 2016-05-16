const { expect } = require("chai");
const { mocks } = require("../mocks");

it("is true when thing is to the left", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setRight(thing, 0);
    physics.setLeft(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    expect(thingToLeft).to.be.true;
});

it("is true when thing overlaps to the left", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidX(thing, 7);
    physics.setMidX(other, 7.7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    expect(thingToLeft).to.be.true;
});

it("is false when thing is to the right", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setLeft(thing, 0);
    physics.setRight(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    expect(thingToLeft).to.be.false;
});

it("is false when thing overlaps to the right", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidY(thing, 7.7);
    physics.setMidY(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    expect(thingToLeft).to.be.false;
});
