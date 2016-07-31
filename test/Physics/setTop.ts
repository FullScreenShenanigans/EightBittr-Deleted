/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets top", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const top = thing.top;
    const newTop = 3.5;

    // Act
    physics.setTop(thing, newTop);

    // Assert
    chai.expect(thing.top).to.be.equal(newTop);
});

mochaLoader.addTest("adjusts bottom", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const newTop = 3.5;
    const newbottom = newTop + thing.height * EightBitter.unitsize;

    // Act
    EightBitter.physics.setTop(thing, newTop);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newbottom);
});
