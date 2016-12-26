import { mochaLoader } from "../main";
import { stubEightBittr, stubThing } from "../utils/fakes";

mochaLoader.it("shifts top", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const height = thing.height;
    const newMidY = 3.5;

    // Act
    EightBitter.physics.setMidY(thing, newMidY);

    // Assert
    chai.expect(thing.top).to.be.equal(newMidY - height / 2);
});

mochaLoader.it("shifts bottom", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const height = thing.height;
    const newMidY = 3.5;

    // Act
    EightBitter.physics.setMidY(thing, newMidY);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newMidY + height / 2);
});
