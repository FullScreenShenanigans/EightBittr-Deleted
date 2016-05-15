import { IEightBittr } from "./IEightBittr";

/**
 * A basic representation of an in-game Thing. Size, velocity, and position
 * are stored, as well as a reference to the parent IEightBittr.
 */
export interface IThing {
    /**
     * The parent IEightBittr controlling this Thing.
     */
    EightBitter: IEightBittr;

    /**
     * The top border of this Thing's bounding box.
     */
    top: number;

    /**
     * The top border of this Thing's bounding box.
     */
    right: number;

    /**
     * The top border of this Thing's bounding box.
     */
    bottom: number;

    /**
     * The top border of this Thing's bounding box.
     */
    left: number;

    /**
     * How wide this Thing is.
     */
    width: number;

    /**
     * How tall this Thing is.
     */
    height: number;

    /**
     * How rapidly this is moving horizontally.
     */
    xvel: number;

    /**
     * How rapidly this is moving vertically.
     */
    yvel: number;
}

/**
 * Settings to initialize a new instance of the IEightBittr interface.
 */
export interface IEightBittrSettings {
    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    unitsize?: number;

    /**
     * A list of member attributes to copy from the source to the IEightBittr.
     */
    constants?: string[];

    /**
     * Where the constants should be copied from, if not the IEightBittr itself.
     */
    constantsSource?: any;
}

/**
 * A summary of times for reset Functions and the overall operation.
 */
export interface IResetTime {
    /**
     * The name of the reset Function called.
     */
    name: string;

    /**
     * The performance.now timestamp of when the reset started.
     */
    timeStart: number;

    /**
     * The performance.now timestamp of when the reset finished.
     */
    timeEnd: number;

    /**
     * Exactly how long it took between timeStart and timeEnd.
     */
    timeTaken: number;
}

/**
 * A summary of times for reset Functions and the overall operation.
 */
export interface IResetTimes {
    /**
     * What order the reset Functions were called.
     */
    order: string[];

    /**
     * The total start, end, and taken times for the reset operation.
     */
    total: IResetTime;

    /**
     * Start, end, and taken times for individual reset Functions, in order.
     */
    times: IResetTime[];
}
