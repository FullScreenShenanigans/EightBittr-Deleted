define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("follows an empty path nowhere", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = [];
            var object = {};

            // Act
            var result = utilities.followPathHard(object, path);

            // Assert
            expect(result).to.be.equal(object);
        });

        it("follows an path of size 1", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = ["foo"];
            var object = {
                foo: {}
            };

            // Act
            var result = utilities.followPathHard(object, path);

            // Assert
            expect(result).to.be.equal(object.foo);
        });

        it("follows an path of size 2", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = ["foo", "bar"];
            var object = {
                foo: {
                    bar: {}
                }
            };

            // Act
            var result = utilities.followPathHard(object, path);

            // Assert
            expect(result).to.be.equal(object.foo.bar);
        });

        it("follows an path of size 3", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = ["foo", "bar", "baz"];
            var object = {
                foo: {
                    bar: {
                        baz: {}
                    }
                }
            };

            // Act
            var result = utilities.followPathHard(object, path);

            // Assert
            expect(result).to.be.equal(object.foo.bar.baz);
        });

        it("respects a starting 0 index", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = ["foo", "bar", "baz"];
            var object = {
                foo: {
                    bar: {
                        baz: {}
                    }
                }
            };

            // Act
            var result = utilities.followPathHard(object, path);

            // Assert
            expect(result).to.be.equal(object.foo.bar.baz);
        });

        it("respects a starting non-zero index", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = ["foo", "bar", "baz"];
            var object = {
                bar: {
                    baz: {}
                }
            };

            // Act
            var result = utilities.followPathHard(object, path, 1);

            // Assert
            expect(result).to.be.equal(object.bar.baz);
        });

        it("returns undefined when part of the path does not exist", function () {
            // Arrange
            var utilities = mocks.mockUtilities();
            var path = ["foo"];
            var object = {};

            // Act
            var result = utilities.followPathHard(object, path);

            // Assert
            expect(result).to.be.undefined;
        });
    };
});
