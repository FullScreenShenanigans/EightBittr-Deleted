define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("updates right", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var right = thing.right;
            var newRight = thing.right + 3.5;

            // Act
            physics.setRight(thing, newRight);

            // Assert
            expect(thing.right).to.be.equal(newRight);
        });

        it("adjusts left", function () {
            // Arrange
            var EightBitter = mocks.mockEightBittr();
            var thing = mocks.mockThing();
            var right = thing.right;
            var newRight = right + 3.5;
            var newLeft = newRight - thing.width * EightBitter.unitsize;

            // Act
            EightBitter.physics.setRight(thing, newRight);

            // Assert
            expect(thing.left).to.be.equal(newLeft);
        });
    };
});
