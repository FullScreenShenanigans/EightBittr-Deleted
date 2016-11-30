import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("splices an object from the end to the beginning of an array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const array = ["a", "b", object];

    // Act
    utilities.arrayToBeginning(object, array);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(0);
});

mochaLoader.it("splices an non-member to the beginning of an array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const array = ["a", "b"];

    // Act
    utilities.arrayToBeginning(object, array);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(0);
});
