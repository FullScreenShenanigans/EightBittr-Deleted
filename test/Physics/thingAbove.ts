import { mochaLoader } from "../main";
import { stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("is true when thing is above", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setBottom(thing, 0);
    physics.setTop(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.true;
});

mochaLoader.it("is true when thing overlaps above", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setMidY(thing, 7);
    physics.setMidY(other, 7.7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.true;
});

mochaLoader.it("is false when thing is below", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setTop(thing, 0);
    physics.setBottom(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.false;
});

mochaLoader.it("is false when thing overlaps below", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const other = stubThing();

    physics.setMidY(thing, 7.7);
    physics.setMidY(other, 7);

    // Act
    const thingAbove = physics.thingAbove(thing, other);

    // Assert
    chai.expect(thingAbove).to.be.false;
});
