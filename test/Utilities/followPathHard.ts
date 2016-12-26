import { Utilities } from "../../src/components/Utilities";
import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("follows an empty path nowhere", (): void => {
    // Arrange
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = [];
    const object: any = {};

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object);
});

mochaLoader.it("follows a path of size 1", (): void => {
    // Arrange
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = ["foo"];
    const object: any = {
        foo: {}
    };

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object.foo);
});

mochaLoader.it("follows a path of size 2", (): void => {
    // Arrange
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = ["foo", "bar"];
    const object: any = {
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
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = ["foo", "bar", "baz"];
    const object: any = {
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
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = ["foo", "bar", "baz"];
    const object: any = {
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
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = ["foo", "bar", "baz"];
    const object: any = {
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
    const utilities: Utilities<any> = stubUtilities();
    const path: string[] = ["foo"];
    const object: any = {};

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.undefined;
});
