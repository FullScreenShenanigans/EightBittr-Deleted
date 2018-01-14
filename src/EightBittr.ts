import { Utilities } from "./components/Utilities";

/**
 * Reset settings for an EightBittr.
 */
export interface IEightBittrSettings {
    /**
     * How wide the game area should be.
     */
    width: number;

    /**
     * How tall the game area should be.
     */
    height: number;
}

/**
 * An base class used exclusively as the parent of GameStartr.
 */
export abstract class EightBittr {
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
     * The most recent reset settings.
     */
    protected settings: IEightBittrSettings;

    /**
     * Initializes a new instance of the EightBittr class.
     *
     * @param settings   Settings to initialize with.
     */
    public constructor(settings: IEightBittrSettings) {
        this.settings = settings;
        this.reset();
    }

    /**
     * Resets the system.
     *
     * @param settings   Settings to reset with, if not the previous ones.
     * @returns this
     */
    public reset(settings: IEightBittrSettings = this.settings): this {
        this.settings = settings;

        this.resetComponents();
        this.resetElements(settings);
        this.resetModules(settings);

        return this;
    }

    /**
     * Resets the system components.
     */
    protected resetComponents(): void {
        this.utilities = new Utilities(this);
    }

    /**
     * Resets the system elements.
     *
     * @param settings   Settings to reset with.
     */
    protected resetElements(settings: IEightBittrSettings): void {
        this.container = this.createContainer(settings);
        this.canvas = this.createCanvas(settings);

        this.container.appendChild(this.canvas);
    }

    /**
     * Registers a Promise-delayed component or module.
     *
     * @type TValue   Type of the component or module.
     * @type TKey   Key of the component or module under this.
     * @param key   Key of the component or module under this.
     * @param generator   Initializes A Promise for the component or module when required.
     */
    protected registerDelayed<TValue, TKey extends keyof this>(key: TKey, generator: () => Promise<TValue>): void {
        let pendingValue: Promise<TValue>;

        Object.defineProperty(this, key, {
            configurable: true,
            get: async (): Promise<TValue> => {
                if (!pendingValue) {
                    pendingValue = generator.call(this);
                }

                return pendingValue;
            },
        });
    }

    /**
     * Registers a lazily instantiated component or module.
     *
     * @type TValue   Type of the component or module.
     * @type TKey   Key of the component or module under this.
     * @param key   Key of the component or module under this.
     * @param generator   Initializes the component or module when required.
     */
    protected registerLazy<TValue, TKey extends keyof this>(key: TKey, generator: () => TValue): void {
        let value: TValue;

        Object.defineProperty(this, key, {
            configurable: true,
            get: (): TValue => {
                if (!value) {
                    value = generator.call(this);
                }

                return value;
            },
        });
    }

    /**
     * @param settings   Settings to reset with.
     * @returns A new HTML container containing all game elements.
     */
    protected createContainer(settings: IEightBittrSettings): HTMLDivElement {
        return this.utilities.createElement<HTMLDivElement>("div", {
            className: "EightBitter",
            style: {
                height: `${settings.height}px`,
                position: "relative",
                width: `${settings.width}px`,
            },
        });
    }

    /**
     * @param settings   Settings to reset with.
     * @returns A new canvas upon which the game's screen is constantly drawn.
     */
    protected createCanvas(settings: IEightBittrSettings): HTMLCanvasElement {
        return this.utilities.createCanvas(settings.width, settings.height);
    }

    /**
     * Resets the system modules.
     *
     * @param settings   Settings to reset with.
     */
    protected abstract resetModules(settings: IEightBittrSettings): void;
}
