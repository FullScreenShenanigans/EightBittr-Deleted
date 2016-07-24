/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("follows an empty path nowhere", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const path = [];
    const object = {};

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object);
});

mochaLoader.addTest("follows an path of size 1", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const path = ["foo"];
    const object = {
        foo: {}
    };

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.equal(object.foo);
});

mochaLoader.addTest("follows an path of size 2", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
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

mochaLoader.addTest("follows an path of size 3", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
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

mochaLoader.addTest("respects a starting 0 index", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
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

mochaLoader.addTest("respects a starting non-zero index", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
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

mochaLoader.addTest("returns undefined when part of the path does not exist", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const path = ["foo"];
    const object = {};

    // Act
    const result = utilities.followPathHard(object, path);

    // Assert
    chai.expect(result).to.be.undefined;
});
