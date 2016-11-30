import { mochaLoader } from "../main";
import { stubEightBittr, stubThing } from "../utils/fakes";

mochaLoader.it("shifts top", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const positioner = stubThing();
    const thing = stubThing();
    const height = thing.height;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    chai.expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

mochaLoader.it("shifts right", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const positioner = stubThing();
    const thing = stubThing();
    const width = thing.width;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    chai.expect(thing.right).to.be.equal(newMidX + width * EightBitter.unitsize / 2);
});

mochaLoader.it("shifts bottom", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const positioner = stubThing();
    const thing = stubThing();
    const height = thing.height;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});

mochaLoader.it("shifts left", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const positioner = stubThing();
    const thing = stubThing();
    const width = thing.width;
    const newMidX = 3.5;
    const newMidY = 3.5;

    EightBitter.physics.setMid(positioner, newMidX, newMidY);

    // Act
    EightBitter.physics.setMidObj(thing, positioner);

    // Assert
    chai.expect(thing.left).to.be.equal(newMidX - width * EightBitter.unitsize / 2);
});
