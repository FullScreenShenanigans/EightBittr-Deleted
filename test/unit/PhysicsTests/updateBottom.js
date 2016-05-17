define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("updates bottom", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var bottom = thing.bottom;
            var newBottom = bottom + 3.5;

            // Act
            physics.setBottom(thing, newBottom);

            // Assert
            expect(thing.bottom).to.be.equal(newBottom);
        });

        it("adjusts top", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var bottom = thing.bottom;
            var newBottom = bottom + 3.5;
            var newTop = newBottom + thing.height * EightBitter.unitsize;

            // Act
            EightBitter.physics.setBottom(thing, newBottom);

            // Assert
            expect(thing.bottom).to.be.equal(newBottom);
        });
    };
});
