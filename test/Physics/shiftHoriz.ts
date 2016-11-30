import { mochaLoader } from "../main";
import { stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("shifts horizontally", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const left = thing.left;
    const right = thing.right;
    const amount = 7;

    // Act
    physics.shiftHoriz(thing, amount);

    // Assert
    chai.expect(thing.left).to.be.equal(left + amount);
    chai.expect(thing.right).to.be.equal(right + amount);
});

mochaLoader.it("doesn't shift vertically", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const top = thing.top;
    const bottom = thing.bottom;

    // Act
    physics.shiftHoriz(thing, 7);

    // Assert
    chai.expect(thing.top).to.be.equal(top);
    chai.expect(thing.bottom).to.be.equal(bottom);
});
