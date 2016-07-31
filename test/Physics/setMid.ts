/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("shifts top", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const height = thing.height;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    chai.expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

mochaLoader.addTest("shifts right", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const width = thing.width;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    chai.expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});

mochaLoader.addTest("shifts bottom", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const height = thing.height;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});

mochaLoader.addTest("shifts left", (): void => {
    // Arrange
    const EightBitter = mocks.mockEightBittr();
    const thing = mocks.mockThing();
    const width = thing.width;
    const newMidX = 3.5;
    const newMidY = 11.7;

    // Act
    EightBitter.physics.setMid(thing, newMidX, newMidY);

    // Assert
    chai.expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});
