define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("sets left", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var newLeft = 3.5;

            // Act
            physics.setLeft(thing, newLeft);

            // Assert
            expect(thing.left).to.be.equal(newLeft);
        });

        it("adjusts right", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var newLeft = 3.5;
            var newRight = newLeft + thing.width * EightBitter.unitsize;

            // Act
            EightBitter.physics.setLeft(thing, newLeft);

            // Assert
            expect(thing.right).to.be.equal(newRight);
        });
    };
});
