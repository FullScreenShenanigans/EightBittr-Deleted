define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts left", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var positioner = mocks.mockThing();
            var thing = mocks.mockThing();
            var width = thing.width;
            var newMidX = 3.5;

            EightBitter.physics.setMidX(positioner, newMidX);

            // Act
            EightBitter.physics.setMidXObj(thing, positioner);

            // Assert
            expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
        });

        it("shifts right", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var positioner = mocks.mockThing();
            var thing = mocks.mockThing();
            var width = thing.width;
            var newMidX = 3.5;

            EightBitter.physics.setMidX(positioner, newMidX);

            // Act
            EightBitter.physics.setMidXObj(thing, positioner);

            // Assert
            expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
        });
    };
});
