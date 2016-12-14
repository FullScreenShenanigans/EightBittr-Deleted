import { mochaLoader } from "../main";
import { stubEightBittr, stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("sets right", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const newRight = 3.5;

    // Act
    physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.right).to.be.equal(newRight);
});

mochaLoader.it("adjusts left", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const newRight = 3.5;
    const newLeft = newRight - thing.width;

    // Act
    EightBitter.physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.left).to.be.equal(newLeft);
});
