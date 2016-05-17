define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts top", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var positioner = mocks.mockThing();
            var thing = mocks.mockThing();
            var height = thing.height;
            var newMidY = 3.5;

            EightBitter.physics.setMidY(positioner, newMidY);

            // Act
            EightBitter.physics.setMidYObj(thing, positioner);

            // Assert
            expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
        });

        it("shifts bottom", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var positioner = mocks.mockThing();
            var thing = mocks.mockThing();
            var height = thing.height;
            var newMidY = 3.5;

            EightBitter.physics.setMidY(positioner, newMidY);

            // Act
            EightBitter.physics.setMidYObj(thing, positioner);

            // Assert
            expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
        });
    };
});
