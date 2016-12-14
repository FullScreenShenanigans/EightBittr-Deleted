import { Physics } from "./components/Physics";
import { Utilities } from "./components/Utilities";

/**
 * An base class used exclusively as the parent of GameStartr.
 */
export class EightBittr {
    /**
     * Physics functions used by this instance.
     */
    public physics: Physics;

    /**
     * Utility functions used by this instance.
     */
    public utilities: Utilities;

    /**
     * Initializes a new instance of the EightBittr class. Constants are copied
     * onto the EightBittr from the designated source.
     * 
     * @param settings   Settings to initialize a new instance of the EightBittr class.
     */
    public constructor(settings: any = {}) {
        this.reset(settings);
    }

    /**
     * Resets the system components.
     * 
     * @param settings   Settings to initialize a new instance of the EightBittr class.
     */
    public reset(settings: any = {}): void {
        /* tslint:disable no-unused-expression */
        settings;
        /* tslint:enable no-unused-expression */

        this.resetComponents();
    }

    /**
     * Sets the system components.
     */
    protected resetComponents(): void {
        this.physics = new Physics();
        this.utilities = new Utilities();
    }
}
