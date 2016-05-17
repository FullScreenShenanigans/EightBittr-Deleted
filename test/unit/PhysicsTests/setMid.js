define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts top", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var height = thing.height;
            var newMidX = 3.5;
            var newMidY = 11.7;

            // Act
            EightBitter.physics.setMid(thing, newMidX, newMidY);

            // Assert
            expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
        });

        it("shifts right", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var width = thing.width;
            var newMidX = 3.5;
            var newMidY = 11.7;

            // Act
            EightBitter.physics.setMid(thing, newMidX, newMidY);

            // Assert
            expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
        });

        it("shifts bottom", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var height = thing.height;
            var newMidX = 3.5;
            var newMidY = 11.7;

            // Act
            EightBitter.physics.setMid(thing, newMidX, newMidY);

            // Assert
            expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
        });

        it("shifts left", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var width = thing.width;
            var newMidX = 3.5;
            var newMidY = 11.7;

            // Act
            EightBitter.physics.setMid(thing, newMidX, newMidY);

            // Assert
            expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
        });
    };
});
