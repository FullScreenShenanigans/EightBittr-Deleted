/**
 * A basic representation of an in-game Thing.
 */
export interface IThing {
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
