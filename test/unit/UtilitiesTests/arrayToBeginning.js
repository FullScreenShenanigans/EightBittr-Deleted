define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("splices an object from the end to the beginning of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = ["a", "b", object];

            // Act
            utilities.arrayToBeginning(object, array, 0);

            // Assert
            expect(array.indexOf(object)).to.equal(0);
        });

        it("splices an non-member to the beginning of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = ["a", "b"];

            // Act
            utilities.arrayToBeginning(object, array, 0);

            // Assert
            expect(array.indexOf(object)).to.equal(0);
        });
    };
});
