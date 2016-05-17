define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("is true when thing is to the left", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setRight(thing, 0);
            physics.setLeft(other, 7);

            // Act
            var thingToLeft = physics.thingToLeft(thing, other);

            // Assert
            expect(thingToLeft).to.be.true;
        });

        it("is true when thing overlaps to the left", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setMidX(thing, 7);
            physics.setMidX(other, 7.7);

            // Act
            var thingToLeft = physics.thingToLeft(thing, other);

            // Assert
            expect(thingToLeft).to.be.true;
        });

        it("is false when thing is to the right", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setLeft(thing, 0);
            physics.setRight(other, 7);

            // Act
            var thingToLeft = physics.thingToLeft(thing, other);

            // Assert
            expect(thingToLeft).to.be.false;
        });

        it("is false when thing overlaps to the right", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setMidY(thing, 7.7);
            physics.setMidY(other, 7);

            // Act
            var thingToLeft = physics.thingToLeft(thing, other);

            // Assert
            expect(thingToLeft).to.be.false;
        });
    };
});
