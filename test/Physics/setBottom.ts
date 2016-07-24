/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets bottom", (): void => {
    // Arrange
    const physics = mocks.mockPhysics();
    const thing = mocks.mockThing();
    const top = thing.top;
    const newBottom = 3.5;

    // Act
    physics.setBottom(thing, newBottom);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newBottom);
});

mochaLoader.addTest("adjusts top", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const newBottom = 3.5;
    const newTop = newBottom + thing.height * EightBitter.unitsize;

    // Act
    EightBitter.physics.setBottom(thing, newBottom);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newBottom);
});
