/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("shifts completely to the left with no limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 35;
    const newMidX = 11.7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.addTest("shifts completely to the right with no limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 11.7;
    const newMidX = 35;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.addTest("shifts completely to the left with a large limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 35;
    const newMidX = 11.7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, 700);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.addTest("shifts completely to the right with a large limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midX = 11.7;
    const newMidX = 35;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, 700);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.addTest("shifts partially to the left with a limit", (): void => {
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
    chai.expect(physics.getMidX(thing)).to.be.equal(midX - limit);
});

mochaLoader.addTest("shifts partially to the right with a limit", (): void => {
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
    chai.expect(physics.getMidX(thing)).to.be.equal(midX + limit);
});
