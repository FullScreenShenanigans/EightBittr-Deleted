define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("moves an object from one array to another", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var arrayOld = ["a", object, "b"];
            var arrayNew = ["c", "d"];

            // Act
            utilities.arraySwitch(object, arrayOld, arrayNew);

            // Assert
            expect(arrayNew.indexOf(object)).to.be.equal(arrayNew.length - 1);
        });

        it("moves a non-member object into a new array", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var object = "foo";
            var arrayOld = ["a", "b"];
            var arrayNew = ["c", "d"];

            // Act
            utilities.arraySwitch(object, arrayOld, arrayNew);

            // Assert
            expect(arrayNew.indexOf(object)).to.be.equal(arrayNew.length - 1);
        });
    };
});