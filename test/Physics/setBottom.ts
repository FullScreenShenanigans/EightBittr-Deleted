import { mochaLoader } from "../main";
import { stubEightBittr, stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("sets bottom", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const newBottom = 3.5;

    // Act
    physics.setBottom(thing, newBottom);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newBottom);
});

mochaLoader.it("adjusts top", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const newBottom = 3.5;
    const newTop = newBottom - thing.height;

    // Act
    EightBitter.physics.setBottom(thing, newBottom);

    // Assert
    chai.expect(thing.top).to.be.equal(newTop);
});
