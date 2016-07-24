/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("is true when thing is to the left", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setRight(thing, 0);
    physics.setLeft(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.true;
});

mochaLoader.addTest("is true when thing overlaps to the left", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidX(thing, 7);
    physics.setMidX(other, 7.7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.true;
});

mochaLoader.addTest("is false when thing is to the right", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setLeft(thing, 0);
    physics.setRight(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.false;
});

mochaLoader.addTest("is false when thing overlaps to the right", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidY(thing, 7.7);
    physics.setMidY(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.false;
});
