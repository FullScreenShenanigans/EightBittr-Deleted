/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("splices an object from the end to the beginning of an array", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const object = "foo";
    const array = ["a", "b", object];

    // Act
    utilities.arrayToBeginning(object, array, 0);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(0);
});

mochaLoader.addTest("splices an non-member to the beginning of an array", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const object = "foo";
    const array = ["a", "b"];

    // Act
    utilities.arrayToBeginning(object, array, 0);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(0);
});
