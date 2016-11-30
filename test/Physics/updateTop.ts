import { mochaLoader } from "../main";
import { stubEightBittr, stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("updates top", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const top = thing.top;
    const newTop = top + 3.5;

    // Act
    physics.setTop(thing, newTop);

    // Assert
    chai.expect(thing.top).to.be.equal(newTop);
});

mochaLoader.it("adjusts bottom", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const top = thing.top;
    const newTop = top + 3.5;
    const newBottom = newTop + thing.height * EightBitter.unitsize;

    // Act
    EightBitter.physics.setTop(thing, newTop);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newBottom);
});
