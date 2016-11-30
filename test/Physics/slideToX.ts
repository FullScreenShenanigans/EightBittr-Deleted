import { mochaLoader } from "../main";
import { stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("shifts completely to the left with no limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midX = 35;
    const newMidX = 11.7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.it("shifts completely to the right with no limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midX = 11.7;
    const newMidX = 35;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.it("shifts completely to the left with a large limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midX = 35;
    const newMidX = 11.7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, 700);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.it("shifts completely to the right with a large limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midX = 11.7;
    const newMidX = 35;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, 700);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(newMidX);
});

mochaLoader.it("shifts partially to the left with a limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midX = 35;
    const newMidX = 11.7;
    const limit = 7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, limit);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(midX - limit);
});

mochaLoader.it("shifts partially to the right with a limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midX = 11.7;
    const newMidX = 35;
    const limit = 7;

    physics.setMidX(thing, midX);

    // Act
    physics.slideToX(thing, newMidX, limit);

    // Assert
    chai.expect(physics.getMidX(thing)).to.be.equal(midX + limit);
});
