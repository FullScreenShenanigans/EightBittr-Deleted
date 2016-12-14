import { mochaLoader } from "../main";
import { stubEightBittr, stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("sets top", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const newTop = 3.5;

    // Act
    physics.setTop(thing, newTop);

    // Assert
    chai.expect(thing.top).to.be.equal(newTop);
});

mochaLoader.it("adjusts bottom", (): void => {
    // Arrange
    const EightBitter = stubEightBittr();
    const thing = stubThing();
    const newTop = 3.5;
    const newbottom = newTop + thing.height;

    // Act
    EightBitter.physics.setTop(thing, newTop);

    // Assert
    chai.expect(thing.bottom).to.be.equal(newbottom);
});
