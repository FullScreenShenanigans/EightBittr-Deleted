define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts left", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var width = thing.width;
            var newMidX = 3.5;

            // Act
            EightBitter.physics.setMidX(thing, newMidX);

            // Assert
            expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
        });

        it("shifts right", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var width = thing.width;
            var newMidX = 3.5;

            // Act
            EightBitter.physics.setMidX(thing, newMidX);

            // Assert
            expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
        });
    };
});
