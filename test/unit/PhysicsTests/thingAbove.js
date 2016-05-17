define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("is true when thing is above", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setBottom(thing, 0);
            physics.setTop(other, 7);

            // Act
            var thingAbove = physics.thingAbove(thing, other);

            // Assert
            expect(thingAbove).to.be.true;
        });

        it("is true when thing overlaps above", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setMidY(thing, 7);
            physics.setMidY(other, 7.7);

            // Act
            var thingAbove = physics.thingAbove(thing, other);

            // Assert
            expect(thingAbove).to.be.true;
        });

        it("is false when thing is below", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setTop(thing, 0);
            physics.setBottom(other, 7);

            // Act
            var thingAbove = physics.thingAbove(thing, other);

            // Assert
            expect(thingAbove).to.be.false;
        });

        it("is false when thing overlaps below", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var other = mocks.mockThing();

            physics.setMidY(thing, 7.7);
            physics.setMidY(other, 7);

            // Act
            var thingAbove = physics.thingAbove(thing, other);

            // Assert
            expect(thingAbove).to.be.false;
        });
    };
});
