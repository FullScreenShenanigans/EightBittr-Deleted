import { EightBittr } from "./EightBittr";

/**
 * A section of EightBittr functionality.
 */
export abstract class Component<TEightBittr extends EightBittr> {
    /**
     * A container EightBitter to work within.
     */
    protected EightBitter: TEightBittr;

    /**
     * Initializes a new instance of the EightBittr class.
     * 
     * @param EightBitter   A container EightBitter to work within.
     */
    public constructor(EightBitter: TEightBittr) {
        this.EightBitter = EightBitter;
    }
}
