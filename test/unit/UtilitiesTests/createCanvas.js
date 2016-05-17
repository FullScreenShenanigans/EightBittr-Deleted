define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("creates a canvas", function () {
            // Arrange
            var utilities = mocks.mockUtilities();

            // Act
            var canvas = utilities.createCanvas();

            // Assert
            expect(canvas.nodeName).to.be.equal("CANVAS");
        });

        it("creates a sized canvas", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var width = 7;
            var height = 14;

            // Act
            var canvas = utilities.createCanvas(width, 14);

            // Assert
            expect(canvas.width).to.be.equal(width);
            expect(canvas.height).to.be.equal(height);
        })
    };
});
