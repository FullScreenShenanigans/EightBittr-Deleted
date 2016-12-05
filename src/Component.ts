import { EightBittr } from "./EightBittr";

/**
 * A section of EightBittr functionality.
 */
export abstract class Component<TEightBittr extends EightBittr> {
    /**
     * A container EightBittr to work within.
     */
    public readonly eightBitter: TEightBittr;

    /**
     * Initializes a new instance of the EightBittr class.
     * 
     * @param EightBitter   A container EightBittr to work within.
     */
    public constructor(EightBitter: TEightBittr) {
        this.eightBitter = EightBitter;
    }
}
