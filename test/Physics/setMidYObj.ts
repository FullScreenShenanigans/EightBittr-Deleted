/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("shifts top", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const height = thing.height;
    const newMidY = 3.5;

    EightBitter.physics.setMidY(positioner, newMidY);

    // Act
    EightBitter.physics.setMidYObj(thing, positioner);

    // Assert
    chai.expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

mochaLoader.addTest("shifts bottom", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const positioner = mocks.mockThing();
    const thing = mocks.mockThing();
    const height = thing.height;
    const newMidY = 3.5;

    EightBitter.physics.setMidY(positioner, newMidY);

    // Act
    EightBitter.physics.setMidYObj(thing, positioner);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});
