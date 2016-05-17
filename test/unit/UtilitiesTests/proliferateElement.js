define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("adds shallow properties to a recipient", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var recipient = document.createElement("div");
            var donor = {
                textContent: "text"
            };

            // Act
            utilities.proliferateElement(recipient, donor);

            // Assert
            expect(recipient.textContent).to.be.equal(donor.textContent);
        });

        it("overrides existing properties", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var recipient = {
                textContent: false
            };
            var donor = {
                foo: true
            };

            // Act
            utilities.proliferateElement(recipient, donor);

            // Assert
            expect(donor.foo).to.be.equal(recipient.foo);
        });

        it("doesn't override existing properties when noOverrides is true", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var recipient = document.createElement("div");
            recipient.textContent = "foo";
            var donor = {
                textContent: "bar"
            };

            // Act
            utilities.proliferateElement(recipient, donor, true);

            // Assert
            expect(recipient.textContent).to.not.be.equal(donor.foo);
        });

        it("adds styles", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var recipient = document.createElement("div");
            var donor = {
                style: {
                    color: "blue"
                }
            }

            // Act
            utilities.proliferateElement(recipient, donor);

            // Assert
            expect(recipient.style.color).to.be.equal(donor.style.color);
        });

        it("appends children", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var recipient = document.createElement("div");
            var donor = {
                children: [
                    document.createElement("span"),
                    document.createElement("span")
                ]
            }

            // Act
            utilities.proliferateElement(recipient, donor);

            // Assert
            var children = [].slice.call(recipient.children);
            expect(children).to.be.deep.equal(donor.children);
        });

        it("appends options", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var recipient = document.createElement("select");
            var donor = {
                children: [
                    document.createElement("option"),
                    document.createElement("option")
                ]
            }

            // Act
            utilities.proliferateElement(recipient, donor);

            // Assert
            var options = [].slice.call(recipient.options);
            expect(options).to.be.deep.equal(donor.children);
        });
    };
});
