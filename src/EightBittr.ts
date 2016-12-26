import { Physics } from "./components/Physics";
import { Utilities } from "./components/Utilities";

/**
 * Settings to initialize a new instance of the EightBittr class.
 */
export interface ISizeSettings {
    /**
     * A nickname for the size settings.
     */
    size?: string;

    /**
     * Whether the game should be expanded to full-screen size.
     */
    full?: boolean;

    /**
     * How wide the screen should be. Infinity is an option.
     */
    width?: number;

    /**
     * How tall the screen should be. Infinity is an option.
     */
    height?: number;
}

/**
 * Initialization settings with filled out, finite sizes.
 */
export interface IProcessedSizeSettings extends ISizeSettings {
    /**
     * How wide the screen should be.
     */
    width: number;

    /**
     * How tall the screen should be.
     */
    height: number;
}

/**
 * An base class used exclusively as the parent of GameStartr.
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
     * HTML container containing all game elements.
     */
    public container: HTMLDivElement;

    /**
     * Canvas upon which the game's screen is constantly drawn.
     */
    public canvas: HTMLCanvasElement;

    /**
     * Initialization settings with filled out, finite sizes.
     */
    private settings: IProcessedSizeSettings;

    /**
     * Initializes a new instance of the EightBittr class. Constants are copied
     * onto the EightBittr from the designated source.
     * 
     * @param rawSettings   Settings to initialize a new instance of the EightBittr class.
     */
    public constructor(rawSettings?: ISizeSettings) {
        this.settings = this.processSettings(rawSettings);
        this.reset(this.settings);
    }

    /**
     * Processes raw instantiation settings for sizing.
     * 
     * @param settings   Raw instantiation settings.
     * @returns Initialization settings with filled out, finite sizes.
     */
    protected processSettings(rawSettings: ISizeSettings = {}): IProcessedSizeSettings {
        return {
            height: this.processSizeSetting(rawSettings.height, innerHeight - 117),
            width: this.processSizeSetting(rawSettings.width, innerWidth),
            ...rawSettings
        };
    }

    /**
     * Processes a size number for instantiation settings.
     * 
     * @param size   A raw size measure for instantiation settings.
     * @param stretched   The default amount for the size.
     * @returns A processed size number for instantiation settings.
     */
    protected processSizeSetting(size: number | undefined, stretched: number): number {
        if (size && isFinite(size)) {
            return size;
        }

        return stretched;
    }

    /**
     * Resets the system.
     * 
     * @param settings   Settings to reset an instance of the EightBittr class.
     */
    protected reset(settings: IProcessedSizeSettings = this.settings): void {
        this.resetComponents();
        this.resetElements(settings);
        this.resetModules(settings);
    }

    /**
     * Resets the system components.
     */
    protected resetComponents(): void {
        this.physics = new Physics(this);
        this.utilities = new Utilities(this);
    }

    /**
     * Resets the system elements.
     * 
     * @param settings   Settings to reset an instance of the EightBittr class.
     */
    protected resetElements(settings: IProcessedSizeSettings): void {
        this.container = this.createContainer(settings);
        this.canvas = this.createCanvas(settings);

        this.container.appendChild(this.canvas);
    }

    /**
     * @param settings   Settings to reset an instance of the EightBittr class.
     * @returns A new HTML container containing all game elements.
     */
    protected createContainer(settings: IProcessedSizeSettings): HTMLDivElement {
        return this.utilities.createElement("div", {
            className: "EightBitter",
            style: {
                position: "relative",
                width: settings.width + "px",
                height: settings.height + "px",
            }
        }) as HTMLDivElement;
    }

    /**
     * @param settings   Settings to reset an instance of the EightBittr class.
     * @returns A new canvas upon which the game's screen is constantly drawn.
     */
    protected createCanvas(settings: IProcessedSizeSettings): HTMLCanvasElement {
        return this.utilities.createCanvas(settings.width, settings.height);
    }

    /**
     * Resets the system modules.
     * 
     * @param settings   Settings to reset an instance of the EightBittr class.
     */
    protected abstract resetModules(settings: IProcessedSizeSettings): void;
}
