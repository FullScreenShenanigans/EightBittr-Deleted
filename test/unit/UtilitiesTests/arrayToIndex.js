define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("splices an object from the beginning to the end of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = [object, "a", "b"];

            // Act
            utilities.arrayToIndex(object, array, array.length - 1);

            // Assert
            expect(array.indexOf(object)).to.equal(array.length - 1);
        });

        it("splices an object from the end to the beginning of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = ["a", "b", object];

            // Act
            utilities.arrayToIndex(object, array, 0);

            // Assert
            expect(array.indexOf(object)).to.equal(0);
        });

        it("splices an non-member to the beginning of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = ["a", "b"];

            // Act
            utilities.arrayToIndex(object, array, 0);

            // Assert
            expect(array.indexOf(object)).to.equal(0);
        });

        it("splices a non-member to the end of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = ["a", "b"];

            // Act
            utilities.arrayToIndex(object, array, array.length - 1);

            // Assert
            expect(array.indexOf(object)).to.equal(array.length - 1);
        });
    };
});
