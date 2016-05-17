define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts horizontally", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var left = thing.left;
            var right = thing.right;
            var amount = 7;

            // Act
            physics.shiftHoriz(thing, amount);

            // Assert
            expect(thing.left).to.be.equal(left + amount);
            expect(thing.right).to.be.equal(right + amount);
        });

        it("doesn't shift vertically", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var top = thing.top;
            var bottom = thing.bottom;

            // Act
            physics.shiftHoriz(thing, 7);

            // Assert
            expect(thing.top).to.be.equal(top);
            expect(thing.bottom).to.be.equal(bottom);
        });
    };
});
