define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("updates top", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var top = thing.top;
            var newTop = top + 3.5;

            // Act
            physics.setTop(thing, newTop);

            // Assert
            expect(thing.top).to.be.equal(newTop);
        });

        it("adjusts bottom", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var top = thing.top;
            var newTop = top + 3.5;
            var newBottom = newTop + thing.height * EightBitter.unitsize;

            // Act
            EightBitter.physics.setTop(thing, newTop);

            // Assert
            expect(thing.bottom).to.be.equal(newBottom);
        });
    };
});
