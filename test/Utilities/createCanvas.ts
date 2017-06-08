import { mochaLoader } from "../main";
import { stubUtilities } from "../utils/fakes";

mochaLoader.it("creates a canvas", (): void => {
    // Arrange
    const utilities = stubUtilities();

    // Act
    const canvas = utilities.createCanvas(1, 1);

    // Assert
    chai.expect(canvas.nodeName).to.be.equal("CANVAS");
});

mochaLoader.it("creates a sized canvas", (): void => {
    // Arrange
    const utilities = stubUtilities();
    const width = 7;
    const height = 14;

    // Act
    const canvas = utilities.createCanvas(width, 14);

    // Assert
    chai.expect(canvas.width).to.be.equal(width);
    chai.expect(canvas.height).to.be.equal(height);
});
