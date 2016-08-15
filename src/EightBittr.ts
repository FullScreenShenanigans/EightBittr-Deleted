import { IEightBittrSettings } from "./IEightBittr";
import { Physics } from "./Physics";
import { Utilities } from "./Utilities";

/**
 * An abstract class used exclusively as the parent of GameStartr.
 */
export abstract class EightBittr {
    /**
     * Physics functions used by this instance.
     */
    public physics: Physics<EightBittr>;

    /**
     * Utility functions used by this instance.
     */
    public utilities: Utilities<EightBittr>;

    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    public unitsize: number;

    /**
     * Initializes a new instance of the EightBittr class. Constants are copied
     * onto the EightBittr from the designated source.
     * 
     * @param settings   Any optional custom settings.
     */
    public constructor(settings: IEightBittrSettings = {}) {
        this.unitsize = settings.unitsize || 1;

        this.resetComponents();
    }

    /**
     * Sets the system components.
     */
    protected abstract resetComponents(): void;
}
