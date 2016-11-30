import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("adds shallow properties to a recipient", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = document.createElement("div");
    const donor: any = {
        textContent: "text"
    };

    // Act
    utilities.proliferateElement(recipient, donor);

    // Assert
    chai.expect(recipient.textContent).to.be.equal(donor.textContent);
});

mochaLoader.it("overrides existing properties", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = {
        textContent: false
    };
    const donor: any = {
        foo: true
    };

    // Act
    utilities.proliferateElement(recipient, donor);

    // Assert
    chai.expect(donor.foo).to.be.equal(recipient.foo);
});

mochaLoader.it("doesn't override existing properties when noOverrides is true", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = document.createElement("div");
    recipient.textContent = "foo";
    const donor: any = {
        textContent: "bar"
    };

    // Act
    utilities.proliferateElement(recipient, donor, true);

    // Assert
    chai.expect(recipient.textContent).to.not.be.equal(donor.foo);
});

mochaLoader.it("adds styles", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = document.createElement("div");
    const donor: any = {
        style: {
            color: "blue"
        }
    }

    // Act
    utilities.proliferateElement(recipient, donor);

    // Assert
    chai.expect(recipient.style.color).to.be.equal(donor.style.color);
});

mochaLoader.it("appends children", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = document.createElement("div");
    const donor: any = {
        children: [
            document.createElement("span"),
            document.createElement("span")
        ]
    }

    // Act
    utilities.proliferateElement(recipient, donor);

    // Assert
    const children = [].slice.call(recipient.children);
    chai.expect(children).to.be.deep.equal(donor.children);
});

mochaLoader.it("appends options", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = document.createElement("select");
    const donor: any = {
        children: [
            document.createElement("option"),
            document.createElement("option")
        ]
    }

    // Act
    utilities.proliferateElement(recipient, donor);

    // Assert
    const options = [].slice.call(recipient.options);
    chai.expect(options).to.be.deep.equal(donor.children);
});
