import { EightBittr } from "../../src/EightBittr";
import { IThing } from "../../src/IThing";
import { Physics } from "../../src/Physics";
import { Utilities } from "../../src/Utilities";

/**
 * Mock implementation of EightBittr.
 */
export class MockEightBittr extends EightBittr {
    /**
     * Sets the system components.
     */
    public resetComponents(): void {
        this.physics = new Physics(this);
        this.utilities = new Utilities(this);
    }
}

/**
 * 
 */
export function stubEightBittr(unitsize: number = 2): EightBittr {
    return new MockEightBittr(unitsize);
}

/**
 * 
 */
export function stubThing(): IThing {
    return {
        width: 7,
        height: 14,
        top: 14,
        right: 42,
        bottom: 28,
        left: 35,
        xvel: 0,
        yvel: 0
    };
}

/**
 * 
 */
export function stubPhysics(EightBitter: EightBittr = stubEightBittr()): Physics<EightBittr> {
    return EightBitter.physics;
}

/**
 * 
 */
export function stubUtilities(EightBitter: EightBittr = stubEightBittr()): Utilities<EightBittr> {
    return EightBitter.utilities;
}
