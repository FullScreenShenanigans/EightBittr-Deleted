import { mochaLoader } from "../main";
import { stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("shifts vertically", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const top = thing.top;
    const bottom = thing.bottom;
    const amount = 7;

    // Act
    physics.shiftVert(thing, amount);

    // Assert
    chai.expect(thing.top).to.be.equal(top + amount);
    chai.expect(thing.bottom).to.be.equal(bottom + amount);
});

mochaLoader.it("doesn't shift horizontally", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const left = thing.left;
    const right = thing.right;

    // Act
    physics.shiftVert(thing, 7);

    // Assert
    chai.expect(thing.left).to.be.equal(left);
    chai.expect(thing.right).to.be.equal(right);
});
