import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("moves an object from one array to another", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const arrayOld = ["a", object, "b"];
    const arrayNew = ["c", "d"];

    // Act
    utilities.arraySwitch(object, arrayOld, arrayNew);

    // Assert
    chai.expect(arrayNew.indexOf(object)).to.be.equal(arrayNew.length - 1);
});

mochaLoader.it("moves a non-member object into a new array", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const object = "foo";
    const arrayOld = ["a", "b"];
    const arrayNew = ["c", "d"];

    // Act
    utilities.arraySwitch(object, arrayOld, arrayNew);

    // Assert
    chai.expect(arrayNew.indexOf(object)).to.be.equal(arrayNew.length - 1);
});
