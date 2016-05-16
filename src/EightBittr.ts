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
     * Physics functions used by this instance.
     */
    public physics: Physics<EightBittr>;

    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    public unitsize: number;

    /**
     * Utility functions used by this instance.
     */
    public utilities: Utilities<EightBittr>;

    /**
     * Initializes a new instance of the EightBittr class. Constants are copied
     * onto the EightBittr from the designated source.
     * 
     * @param settings   Any optional custom settings.
     */
    public constructor(settings: IEightBittrSettings = {}) {
        this.unitsize = settings.unitsize || 1;

        this.resetPhysics();
        this.resetUtilities();
    }

    /**
     * Resets the physics component.
     */
    protected resetPhysics() {
        this.physics = new Physics(this);
    }

    /**
     * Resets the utilities component.
     */
    protected resetUtilities() {
        this.utilities = new Utilities(this);
    }
}
