/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("shifts completely to the top with no limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 35;
    const newMidY = 11.7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.addTest("shifts completely to the bottom with no limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 11.7;
    const newMidY = 35;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.addTest("shifts completely to the top with a large limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 35;
    const newMidY = 11.7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, 700);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.addTest("shifts completely to the bottom with a large limit", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const midY = 11.7;
    const newMidY = 35;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, 700);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.addTest("shifts partially to the top with a limit", (): void => {
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
    chai.expect(physics.getMidY(thing)).to.be.equal(midY - limit);
});

mochaLoader.addTest("shifts partially to the bottom with a limit", (): void => {
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
    chai.expect(physics.getMidY(thing)).to.be.equal(midY + limit);
});
