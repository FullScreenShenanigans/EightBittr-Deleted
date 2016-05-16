const { expect } = require("chai");
const { mocks } = require("../mocks");

it("is true when thing is above", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setBottom(thing, 0);
    physics.setTop(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    expect(thingAbove).to.be.true;
});

it("is true when thing overlaps above", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidY(thing, 7);
    physics.setMidY(other, 7.7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    expect(thingAbove).to.be.true;
});

it("is false when thing is below", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setTop(thing, 0);
    physics.setBottom(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    expect(thingAbove).to.be.false;
});

it("is false when thing overlaps below", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidY(thing, 7.7);
    physics.setMidY(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    expect(thingAbove).to.be.false;
});
