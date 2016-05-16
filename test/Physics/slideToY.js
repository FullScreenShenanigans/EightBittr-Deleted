const { expect } = require("chai");
const { mocks } = require("../mocks");

it("shifts completely to the top with no limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 35;
    const newMidY = 11.7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY);

    // Assert
    expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

it("shifts completely to the bottom with no limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 11.7;
    const newMidY = 35;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY);

    // Assert
    expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

it("shifts completely to the top with a large limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 35;
    const newMidY = 11.7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, 700);

    // Assert
    expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

it("shifts completely to the bottom with a large limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 11.7;
    const newMidY = 35;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, 700);

    // Assert
    expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

it("shifts partially to the top with a limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 35;
    const newMidY = 11.7;
    const limit = 7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, limit);

    // Assert
    expect(physics.getMidY(thing)).to.be.equal(midY - limit);
});

it("shifts partially to the bottom with a limit", () => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 11.7;
    const newMidY = 35;
    const limit = 7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, limit);

    // Assert
    expect(physics.getMidY(thing)).to.be.equal(midY + limit);
});
