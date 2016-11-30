import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("splices an object from the beginning to the end of an array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const array = [object, "a", "b"];

    // Act
    utilities.arrayToIndex(object, array, array.length - 1);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(array.length - 1);
});

mochaLoader.it("splices an object from the end to the beginning of an array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const array = ["a", "b", object];

    // Act
    utilities.arrayToIndex(object, array, 0);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(0);
});

mochaLoader.it("splices an non-member to the beginning of an array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const array = ["a", "b"];

    // Act
    utilities.arrayToIndex(object, array, 0);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(0);
});

mochaLoader.it("splices a non-member to the end of an array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const array = ["a", "b"];

    // Act
    utilities.arrayToIndex(object, array, array.length - 1);

    // Assert
    chai.expect(array.indexOf(object)).to.equal(array.length - 1);
});
