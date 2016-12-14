import { mochaLoader } from "../main";
import { stubEightBittr, stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("sets left", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const newLeft = 3.5;

    // Act
    physics.setLeft(thing, newLeft);

    // Assert
    chai.expect(thing.left).to.be.equal(newLeft);
});

mochaLoader.it("adjusts right", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const newLeft = 3.5;
    const newRight = newLeft + thing.width;

    // Act
    EightBitter.physics.setLeft(thing, newLeft);

    // Assert
    chai.expect(thing.right).to.be.equal(newRight);
});
