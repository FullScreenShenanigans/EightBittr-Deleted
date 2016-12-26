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
     * @param gameStarter   GameStartr instance this is used for.
     */
    public constructor(gameStarter: TGameStartr) {
        this.gameStarter = gameStarter;
    }
}
