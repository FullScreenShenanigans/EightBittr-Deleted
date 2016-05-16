const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts completely to the left with no limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 35;
    const newMidX = 11.7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX);

    // Assert
    expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

it("shifts completely to the right with no limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 11.7;
    const newMidX = 35;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX);

    // Assert
    expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

it("shifts completely to the left with a large limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 35;
    const newMidX = 11.7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, 700);

    // Assert
    expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

it("shifts completely to the right with a large limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 11.7;
    const newMidX = 35;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, 700);

    // Assert
    expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

it("shifts partially to the left with a limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 35;
    const newMidX = 11.7;
    const limit = 7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, limit);

    // Assert
    expect(physics.getMidX(thing)).to.be.equal(midX - limit);
});

it("shifts partially to the right with a limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 11.7;
    const newMidX = 35;
    const limit = 7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, limit);

    // Assert
    expect(physics.getMidX(thing)).to.be.equal(midX + limit);
});
