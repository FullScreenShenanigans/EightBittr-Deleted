/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("updates right", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const right = thing.right;
    const newRight = thing.right + 3.5;

    // Act
    physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.right).to.be.equal(newRight);
});

mochaLoader.addTest("adjusts left", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const right = thing.right;
    const newRight = right + 3.5;
    const newLeft = newRight - thing.width * EightBitter.unitsize;

    // Act
    EightBitter.physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.left).to.be.equal(newLeft);
});
