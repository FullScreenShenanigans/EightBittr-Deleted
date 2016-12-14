import { mochaLoader } from "../main";
import { stubEightBittr, stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("updates right", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const newRight = thing.right + 3.5;

    // Act
    physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.right).to.be.equal(newRight);
});

mochaLoader.it("adjusts left", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const right = thing.right;
    const newRight = right + 3.5;
    const newLeft = newRight - thing.width;

    // Act
    EightBitter.physics.setRight(thing, newRight);

    // Assert
    chai.expect(thing.left).to.be.equal(newLeft);
});
