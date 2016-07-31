/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("creates a simple element", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();

    // Act
    const element = utilities.createElement("div");

    // Assert
    chai.expect(element.nodeName).to.be.equal("DIV");
});

mochaLoader.addTest("adds an object", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();

    // Act
    const element = utilities.createElement(
        "div",
        {
            textContent: "foo"
        });

    // Assert
    chai.expect(element.textContent).to.be.equal("foo");
});

mochaLoader.addTest("adds multiple objects", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();

    // Act
    const element = utilities.createElement(
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
    chai.expect(element.textContent).to.be.equal("foo");
    chai.expect(element.style.color).to.be.equal("blue");
});
