import { EightBittr } from "./EightBittr";
import { IThing } from "./IThing";

/**
 * Stub height for EightBittr tests.
 */
export const stubHeight = 480;

/**
 * Stub width for EightBittr tests.
 */
export const stubWidth = 320;

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
export const stubEightBittr = (): StubEightBittr =>
    new StubEightBittr()
        .reset({
            height: stubHeight,
            width: stubWidth,
        });

/**
 *
 */
export const stubThing = (): IThing => ({
    width: 7,
    height: 14,
    top: 14,
    right: 42,
    bottom: 28,
    left: 35,
    xvel: 0,
    yvel: 0,
});
