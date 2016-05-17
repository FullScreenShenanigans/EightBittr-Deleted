define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("creates a simple element", function () {
            // Arrange
            var utilities = mocks.mockUtilities();

            // Act
            var element = utilities.createElement("div");

            // Assert
            expect(element.nodeName).to.be.equal("DIV");
        });

        it("adds an object", function () {
            // Arrange
            var utilities = mocks.mockUtilities();

            // Act
            var element = utilities.createElement(
                "div",
                {
                    textContent: "foo"
                });

            // Assert
            expect(element.textContent).to.be.equal("foo");
        });

        it("adds multiple objects", function () {
            // Arrange
            var utilities = mocks.mockUtilities();

            // Act
            var element = utilities.createElement(
                "div",
                {
                    textContent: "foo"
                },
                {
                    style: {
                        color: "blue"
                    }
                });

            // Assert
            expect(element.textContent).to.be.equal("foo");
            expect(element.style.color).to.be.equal("blue");
        });
    };
});
