import { EightBittr } from "./EightBittr";

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
    new StubEightBittr({
        height: stubHeight,
        width: stubWidth,
    });
