import { Physics } from "../../src/components/Physics";
import { Utilities } from "../../src/components/Utilities";
import { EightBittr } from "../../src/EightBittr";
import { IThing } from "../../src/IThing";

/**
 * 
 */
export class StubEightBittr extends EightBittr {
    /**
     * 
     */
    protected resetModules(): void {
        // ...
    }
}

/**
 * 
 */
export function stubEightBittr(unitsize: number = 2): EightBittr {
    return new StubEightBittr(unitsize);
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
export function stubPhysics(eightBitter: EightBittr = stubEightBittr()): Physics<StubEightBittr> {
    return eightBitter.physics;
}

/**
 * 
 */
export function stubUtilities(eightBitter: EightBittr = stubEightBittr()): Utilities<StubEightBittr> {
    return eightBitter.utilities;
}
