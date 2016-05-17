import { Physics } from "./Physics";
import { Utilities } from "./Utilities";

/**
 * Settings to initialize a new instance of the IEightBittr interface.
 */
export interface IEightBittrSettings {
    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    unitsize?: number;
}

/**
 * 
 */
export interface IEightBittr {
    /**
     * 
     */
    physics: Physics<IEightBittr>;

    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    unitsize: number;

    /**
     * 
     */
    utilities: Utilities<IEightBittr>;
}
