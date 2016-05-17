define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts completely to the left with no limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midX = 35;
            var newMidX = 11.7;

            physics.setMidX(thing, midX);

            // Act
            physics.slideToX(thing, newMidX);

            // Assert
            expect(physics.getMidX(thing)).to.be.equal(newMidX);
        });

        it("shifts completely to the right with no limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midX = 11.7;
            var newMidX = 35;

            physics.setMidX(thing, midX);

            // Act
            physics.slideToX(thing, newMidX);

            // Assert
            expect(physics.getMidX(thing)).to.be.equal(newMidX);
        });

        it("shifts completely to the left with a large limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midX = 35;
            var newMidX = 11.7;

            physics.setMidX(thing, midX);

            // Act
            physics.slideToX(thing, newMidX, 700);

            // Assert
            expect(physics.getMidX(thing)).to.be.equal(newMidX);
        });

        it("shifts completely to the right with a large limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midX = 11.7;
            var newMidX = 35;

            physics.setMidX(thing, midX);

            // Act
            physics.slideToX(thing, newMidX, 700);

            // Assert
            expect(physics.getMidX(thing)).to.be.equal(newMidX);
        });

        it("shifts partially to the left with a limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midX = 35;
            var newMidX = 11.7;
            var limit = 7;

            physics.setMidX(thing, midX);

            // Act
            physics.slideToX(thing, newMidX, limit);

            // Assert
            expect(physics.getMidX(thing)).to.be.equal(midX - limit);
        });

        it("shifts partially to the right with a limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midX = 11.7;
            var newMidX = 35;
            var limit = 7;

            physics.setMidX(thing, midX);

            // Act
            physics.slideToX(thing, newMidX, limit);

            // Assert
            expect(physics.getMidX(thing)).to.be.equal(midX + limit);
        });
    };
});
