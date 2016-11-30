import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("follows an empty path nowhere", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = [];
    const object = {};

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object);
});

mochaLoader.it("follows a path of size 1", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = ["foo"];
    const object = {
        foo: {}
    };

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object.foo);
});

mochaLoader.it("follows a path of size 2", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = ["foo", "bar"];
    const object = {
        foo: {
            bar: {}
        }
    };

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object.foo.bar);
});

mochaLoader.it("follows a path of size 3", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = ["foo", "bar", "baz"];
    const object = {
        foo: {
            bar: {
                baz: {}
            }
        }
    };

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object.foo.bar.baz);
});

mochaLoader.it("respects a starting 0 index", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = ["foo", "bar", "baz"];
    const object = {
        foo: {
            bar: {
                baz: {}
            }
        }
    };

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object.foo.bar.baz);
});

mochaLoader.it("respects a starting non-zero index", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = ["foo", "bar", "baz"];
    const object = {
        bar: {
            baz: {}
        }
    };

    // Act
    const result = utilities.followPathHard(object, path, 1);

    // Assert
    chai.expect(result).to.be.equal(object.bar.baz);
});

mochaLoader.it("returns undefined when part of the path does not exist", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const path = ["foo"];
    const object = {};

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.undefined;
});
