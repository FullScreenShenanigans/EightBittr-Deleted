import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("adds shallow properties to a recipient", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = {};
    const donor: any = {
        foo: true,
        bar: false
    };

    // Act
    utilities.proliferate(recipient, donor);

    // Assert
    chai.expect(donor.foo).to.be.equal(recipient.foo);
    chai.expect(donor.bar).to.be.equal(recipient.bar);
});

mochaLoader.it("adds deep copied objects to a recipient", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = {};
    const donor: any = {
        foo: {
            bar: true
        }
    };

    // Act
    utilities.proliferate(recipient, donor);

    // Assert
    chai.expect(donor.foo).to.be.deep.equal(recipient.foo);
    chai.expect(donor.foo).to.not.be.equal(recipient.foo);
});

mochaLoader.it("adds deep copied arrays to a recipient", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = {};
    const donor: any = {
        foo: [1, 2, 3]
    };

    // Act
    utilities.proliferate(recipient, donor);

    // Assert
    chai.expect(donor.foo).to.be.deep.equal(recipient.foo);
    chai.expect(donor.foo).to.not.be.equal(recipient.foo);
});

mochaLoader.it("overrides existing properties", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = {
        foo: false
    };
    const donor: any = {
        foo: true
    };

    // Act
    utilities.proliferate(recipient, donor);

    // Assert
    chai.expect(donor.foo).to.be.equal(recipient.foo);
});

mochaLoader.it("doesn't override existing properties when noOverrides is true", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const recipient: any = {
        foo: false
    };
    const donor: any = {
        foo: true
    };

    // Act
    utilities.proliferate(recipient, donor, true);

    // Assert
    chai.expect(donor.foo).to.not.be.equal(recipient.foo);
});
