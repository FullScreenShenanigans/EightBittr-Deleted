/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("is true when thing is above", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setBottom(thing, 0);
    physics.setTop(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.true;
});

mochaLoader.addTest("is true when thing overlaps above", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidY(thing, 7);
    physics.setMidY(other, 7.7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.true;
});

mochaLoader.addTest("is false when thing is below", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setTop(thing, 0);
    physics.setBottom(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.false;
});

mochaLoader.addTest("is false when thing overlaps below", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const other = mocks.mockThing();

    physics.setMidY(thing, 7.7);
    physics.setMidY(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.false;
});
