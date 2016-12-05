import { IEightBittrSettings } from "./IEightBittr";
import { Physics } from "./Physics";
import { Utilities } from "./Utilities";

/**
 * An base class used exclusively as the parent of GameStartr.
 */
export class EightBittr {
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
     * @param settings   Settings to initialize a new instance of the EightBittr class.
     */
    public constructor(settings: IEightBittrSettings = {}) {
        this.unitsize = settings.unitsize || 1;

        this.reset(settings);
    }

    /**
     * Resets the system components.
     * 
     * @param settings   Settings to initialize a new instance of the EightBittr class.
     */
    public reset(settings: IEightBittrSettings = {}): void {
        /* tslint:disable no-unused-expression */
        settings;
        /* tslint:enable no-unused-expression */

        this.resetComponents();
    }

    /**
     * Sets the system components.
     */
    protected resetComponents(): void {
        this.physics = new Physics(this);
        this.utilities = new Utilities(this);
    }
}
