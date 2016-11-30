import { mochaLoader } from "../main";
import { stubPhysics, stubThing } from "../utils/fakes";

mochaLoader.it("shifts completely to the top with no limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midY = 35;
    const newMidY = 11.7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.it("shifts completely to the bottom with no limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midY = 11.7;
    const newMidY = 35;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.it("shifts completely to the top with a large limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midY = 35;
    const newMidY = 11.7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, 700);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.it("shifts completely to the bottom with a large limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midY = 11.7;
    const newMidY = 35;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, 700);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(newMidY);
});

mochaLoader.it("shifts partially to the top with a limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midY = 35;
    const newMidY = 11.7;
    const limit = 7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, limit);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(midY - limit);
});

mochaLoader.it("shifts partially to the bottom with a limit", (): void => {
    // Arrange
    const physics = stubPhysics();
    const thing = stubThing();
    const midY = 11.7;
    const newMidY = 35;
    const limit = 7;

    physics.setMidY(thing, midY);

    // Act
    physics.slideToY(thing, newMidY, limit);

    // Assert
    chai.expect(physics.getMidY(thing)).to.be.equal(midY + limit);
});
