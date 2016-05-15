import { IEightBittr, IEightBittrSettings } from "./IEightBittr";
import { Physics } from "./Physics";
import { Utilities } from "./Utilities";

/**
 * An abstract class used exclusively as the parent of GameStartr. EightBittr
 * contains useful functions for manipulating Things that are independent of
 * the required GameStartr modules.
 */
export class EightBittr implements IEightBittr {
    /**
     * 
     */
    public physics: Physics<EightBittr>;

    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    public unitsize: number;

    /**
     * 
     */
    public utilities: Utilities<EightBittr>;

    /**
     * Any custom settings passed in during construction to be passed to
     * reset Functions.
     */
    protected customs: any;

    /**
     * Initializes a new instance of the EightBittr class. Constants are copied
     * onto the EightBittr from the designated source.
     * 
     * @param settings   Any optional custom settings.
     */
    constructor(settings: IEightBittrSettings = {}) {
        this.unitsize = settings.unitsize || 1;
    }
}
