/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("shifts horizontally", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const left = thing.left;
    const right = thing.right;
    const amount = 7;

    // Act
    physics.shiftHoriz(thing, amount);

    // Assert
    chai.expect(thing.left).to.be.equal(left + amount);
    chai.expect(thing.right).to.be.equal(right + amount);
});

mochaLoader.addTest("doesn't shift vertically", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const top = thing.top;
    const bottom = thing.bottom;

    // Act
    physics.shiftHoriz(thing, 7);

    // Assert
    chai.expect(thing.top).to.be.equal(top);
    chai.expect(thing.bottom).to.be.equal(bottom);
});
