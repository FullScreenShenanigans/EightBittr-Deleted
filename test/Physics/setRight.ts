/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets right", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const tight = thing.right;
    const newRight = 3.5;

    // Act
    physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.right).to.be.equal(newRight);
});

mochaLoader.addTest("adjusts left", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const newRight = 3.5;
    const newLeft = newRight - thing.width * EightBitter.unitsize;

    // Act
    EightBitter.physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.left).to.be.equal(newLeft);
});
