import { mochaLoader } from "../main";
import { stubEightBittr, stubThing } from "../utils/fakes";

mochaLoader.it("shifts top", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const positioner = stubThing();
    const thing = stubThing();
    const height = thing.height;
    const newMidY = 3.5;

    EightBitter.physics.setMidY(positioner, newMidY);

    // Act
    EightBitter.physics.setMidYObj(thing, positioner);

    // Assert
    chai.expect(thing.top).to.be.equal(newMidY - height * EightBitter.unitsize / 2);
});

mochaLoader.it("shifts bottom", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const positioner = stubThing();
    const thing = stubThing();
    const height = thing.height;
    const newMidY = 3.5;

    EightBitter.physics.setMidY(positioner, newMidY);

    // Act
    EightBitter.physics.setMidYObj(thing, positioner);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newMidY + height * EightBitter.unitsize / 2);
});
