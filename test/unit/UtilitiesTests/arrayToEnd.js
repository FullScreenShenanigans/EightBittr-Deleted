define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("splices an object from the beginning of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = [object, "a", "b"];

            // Act
            utilities.arrayToEnd(object, array);

            // Assert
            expect(array.indexOf(object)).to.equal(array.length - 1);
        });

        it("splices a non-member to the end of an array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var array = ["a", "b"];

            // Act
            utilities.arrayToEnd(object, array);

            // Assert
            expect(array.indexOf(object)).to.equal(array.length - 1);
        });
    };
});
