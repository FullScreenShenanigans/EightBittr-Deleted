/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("splices an object from the beginning of an array", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const object = "foo";
    const array = [object, "a", "b"];

    // Act
    utilities.arrayToEnd(object, array);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(array.length - 1);
});

mochaLoader.addTest("splices a non-member to the end of an array", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const object = "foo";
    const array = ["a", "b"];

    // Act
    utilities.arrayToEnd(object, array);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(array.length - 1);
});
