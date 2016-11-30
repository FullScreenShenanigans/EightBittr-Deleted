import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("creates a simple element", (): void => {
    // Arrange
    const utilities = stubUtilities();

    // Act
    const element = utilities.createElement("div");

    // Assert
    chai.expect(element.nodeName).to.be.equal("DIV");
});

mochaLoader.it("adds an object", (): void => {
    // Arrange
    const utilities = stubUtilities();

    // Act
    const element = utilities.createElement(
        "div",
        {
            textContent: "foo"
        });

    // Assert
    chai.expect(element.textContent).to.be.equal("foo");
});

mochaLoader.it("adds multiple objects", (): void => {
    // Arrange
    const utilities = stubUtilities();

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
