import { IEightBittr } from "./IEightBittr";

/**
 * A section of 
 */
export abstract class Component<TIEightBittr extends IEightBittr> {
    /**
     * A container EightBitter to work within.
     */
    protected EightBitter: TIEightBittr;

    /**
     * Initializes a new instance of the EightBittr class.
     * 
     * @param EightBitter   A container EightBitter to work within.
     */
    public constructor(EightBitter: TIEightBittr) {
        this.EightBitter = EightBitter;
    }
}
