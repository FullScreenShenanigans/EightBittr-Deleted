/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("moves an object from one array to another", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const object = "foo";
    const arrayOld = ["a", object, "b"];
    const arrayNew = ["c", "d"];

    // Act
    utilities.arraySwitch(object, arrayOld, arrayNew);

    // Assert
    chai.expect(arrayNew.indexOf(object)).to.be.equal(arrayNew.length - 1);
});

mochaLoader.addTest("moves a non-member object into a new array", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const object = "foo";
    const arrayOld = ["a", "b"];
    const arrayNew = ["c", "d"];

    // Act
    utilities.arraySwitch(object, arrayOld, arrayNew);

    // Assert
    chai.expect(arrayNew.indexOf(object)).to.be.equal(arrayNew.length - 1);
});
