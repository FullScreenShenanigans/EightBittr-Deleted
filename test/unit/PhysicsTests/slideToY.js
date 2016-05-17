define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("shifts completely to the top with no limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midY = 35;
            var newMidY = 11.7;

            physics.setMidY(thing, midY);

            // Act
            physics.slideToY(thing, newMidY);

            // Assert
            expect(physics.getMidY(thing)).to.be.equal(newMidY);
        });

        it("shifts completely to the bottom with no limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midY = 11.7;
            var newMidY = 35;

            physics.setMidY(thing, midY);

            // Act
            physics.slideToY(thing, newMidY);

            // Assert
            expect(physics.getMidY(thing)).to.be.equal(newMidY);
        });

        it("shifts completely to the top with a large limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midY = 35;
            var newMidY = 11.7;

            physics.setMidY(thing, midY);

            // Act
            physics.slideToY(thing, newMidY, 700);

            // Assert
            expect(physics.getMidY(thing)).to.be.equal(newMidY);
        });

        it("shifts completely to the bottom with a large limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midY = 11.7;
            var newMidY = 35;

            physics.setMidY(thing, midY);

            // Act
            physics.slideToY(thing, newMidY, 700);

            // Assert
            expect(physics.getMidY(thing)).to.be.equal(newMidY);
        });

        it("shifts partially to the top with a limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midY = 35;
            var newMidY = 11.7;
            var limit = 7;

            physics.setMidY(thing, midY);

            // Act
            physics.slideToY(thing, newMidY, limit);

            // Assert
            expect(physics.getMidY(thing)).to.be.equal(midY - limit);
        });

        it("shifts partially to the bottom with a limit", function () {
            // Arrange
            var physics = mocks.mockPhysics();
            var thing = mocks.mockThing();
            var midY = 11.7;
            var newMidY = 35;
            var limit = 7;

            physics.setMidY(thing, midY);

            // Act
            physics.slideToY(thing, newMidY, limit);

            // Assert
            expect(physics.getMidY(thing)).to.be.equal(midY + limit);
        });
    };
});
