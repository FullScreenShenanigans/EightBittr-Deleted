import { EightBittr } from "./EightBittr";

/**
 * A GameStartr component with full access to game state.
 */
export abstract class Component<TGameStartr extends EightBittr> {
    /**
     * GameStartr instance this is used for.
     */
    protected readonly gameStarter: TGameStartr;

    /**
     * Initializes a new instance of the Component class.
     * 
     * @param source   GameStartr instance to wrap around, or one of its components.
     */
    public constructor(source: TGameStartr | Component<TGameStartr>) {
        this.gameStarter = source instanceof Component
            ? source.gameStarter
            : source;
    }
}
