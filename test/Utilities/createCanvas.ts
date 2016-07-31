/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/EightBittr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("creates a canvas", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();

    // Act
    const canvas = utilities.createCanvas();

    // Assert
    chai.expect(canvas.nodeName).to.be.equal("CANVAS");
});

mochaLoader.addTest("creates a sized canvas", (): void => {
    // Arrange
    const utilities = mocks.mockUtilities();
    const width = 7;
    const height = 14;

    // Act
    const canvas = utilities.createCanvas(width, 14);

    // Assert
    chai.expect(canvas.width).to.be.equal(width);
    chai.expect(canvas.height).to.be.equal(height);
})
