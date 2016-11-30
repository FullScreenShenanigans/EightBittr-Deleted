import { mochaLoader } from "../main";
import { stubEightBittr, stubThing } from "../utils/fakes";

mochaLoader.it("shifts left", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const width = thing.width;
    const newMidX = 3.5;

    // Act
    EightBitter.physics.setMidX(thing, newMidX);

    // Assert
    chai.expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});

mochaLoader.it("shifts right", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const width = thing.width;
    const newMidX = 3.5;

    // Act
    EightBitter.physics.setMidX(thing, newMidX);

    // Assert
    chai.expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});
