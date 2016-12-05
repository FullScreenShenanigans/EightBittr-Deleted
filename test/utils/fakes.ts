import { EightBittr } from "../../src/EightBittr";
import { IThing } from "../../src/IThing";
import { Physics } from "../../src/Physics";
import { Utilities } from "../../src/Utilities";

/**
 * 
 */
export function stubEightBittr(unitsize: number = 2): EightBittr {
    return new EightBittr(unitsize);
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
