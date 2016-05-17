define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts vertically", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var top = thing.top;
            var bottom = thing.bottom;
            var amount = 7;

            // Act
            physics.shiftVert(thing, amount);

            // Assert
            expect(thing.top).to.be.equal(top + amount);
            expect(thing.bottom).to.be.equal(bottom + amount);
        });

        it("doesn't shift horizontally", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var left = thing.left;
            var right = thing.right;

            // Act
            physics.shiftVert(thing, 7);

            // Assert
            expect(thing.left).to.be.equal(left);
            expect(thing.right).to.be.equal(right);
        });
    };
});
