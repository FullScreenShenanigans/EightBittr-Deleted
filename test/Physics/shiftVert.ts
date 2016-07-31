/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("shifts vertically", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const top = thing.top;
    const bottom = thing.bottom;
    const amount = 7;

    // Act
    physics.shiftVert(thing, amount);

    // Assert
    chai.expect(thing.top).to.be.equal(top + amount);
    chai.expect(thing.bottom).to.be.equal(bottom + amount);
});

mochaLoader.addTest("doesn't shift horizontally", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const left = thing.left;
    const right = thing.right;

    // Act
    physics.shiftVert(thing, 7);

    // Assert
    chai.expect(thing.left).to.be.equal(left);
    chai.expect(thing.right).to.be.equal(right);
});
