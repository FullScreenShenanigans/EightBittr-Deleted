import { mochaLoader } from "../main";
import { stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("is true when thing is to the left", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setRight(thing, 0);
    physics.setLeft(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.true;
});

mochaLoader.it("is true when thing overlaps to the left", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setMidX(thing, 7);
    physics.setMidX(other, 7.7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.true;
});

mochaLoader.it("is false when thing is to the right", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setLeft(thing, 0);
    physics.setRight(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.false;
});

mochaLoader.it("is false when thing overlaps to the right", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setMidY(thing, 7.7);
    physics.setMidY(other, 7);

    // Act
    const thingToLeft = physics.thingToLeft(thing, other);

    // Assert
    chai.expect(thingToLeft).to.be.false;
});
