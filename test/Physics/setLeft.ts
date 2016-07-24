/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets left", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const newLeft = 3.5;

    // Act
    physics.setLeft(thing, newLeft);

    // Assert
    chai.expect(thing.left).to.be.equal(newLeft);
});

mochaLoader.addTest("adjusts right", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const newLeft = 3.5;
    const newRight = newLeft + thing.width * EightBitter.unitsize;

    // Act
    EightBitter.physics.setLeft(thing, newLeft);

    // Assert
    chai.expect(thing.right).to.be.equal(newRight);
});
