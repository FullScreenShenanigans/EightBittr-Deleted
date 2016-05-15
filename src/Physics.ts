import { Component } from "./Component";
import { IEightBittr } from "./IEightBittr";
import { IThing } from "./IThing";

/**
 * An abstract class used exclusively as the parent of GameStartr. EightBittr
 * contains useful functions for manipulating Things that are independent of
 * the required GameStartr modules.
 */
export abstract class Physics<TIEightBittr extends IEightBittr> extends Component<TIEightBittr> {
    /**
     * Shifts a Thing vertically by changing its top and bottom attributes.
     * 
     * @param thing   The Thing to shift vertically.
     * @param dy   How far to shift the Thing.
     */
    public shiftVert(thing: IThing, dy: number): void {
        thing.top += dy;
        thing.bottom += dy;
    }

    /**
     * Shifts a Thing horizontally by changing its top and bottom attributes.
     * 
     * @param thing   The Thing to shift horizontally.
     * @param dy   How far to shift the Thing.
     */
    public shiftHoriz(thing: IThing, dx: number): void {
        thing.left += dx;
        thing.right += dx;
    }

    /**
     * Sets the top of a Thing to a set number, changing the bottom based on its
     * height and the EightBittr's unisize.
     * 
     * @param thing   The Thing to shift vertically.
     * @param top   Where the Thing's top should be.
     */
    public setTop(thing: IThing, top: number): void {
        thing.top = top;
        thing.bottom = thing.top + thing.height * this.EightBitter.unitsize;
    }

    /**
     * Sets the right of a Thing to a set number, changing the left based on its
     * width and the EightBittr's unisize.
     * 
     * @param thing   The Thing to shift horizontally.
     * @param top   Where the Thing's right should be.
     */
    public setRight(thing: IThing, right: number): void {
        thing.right = right;
        thing.left = thing.right - thing.width * this.EightBitter.unitsize;
    }

    /**
     * Sets the bottom of a Thing to a set number, changing the top based on its
     * height and the EightBittr's unisize.
     * 
     * @param thing   The Thing to shift vertically.
     * @param top   Where the Thing's bottom should be.
     */
    public setBottom(thing: IThing, bottom: number): void {
        thing.bottom = bottom;
        thing.top = thing.bottom - thing.height * this.EightBitter.unitsize;
    }

    /**
     * Sets the left of a Thing to a set number, changing the right based on its
     * width and the EightBittr's unisize.
     * 
     * @param thing   The Thing to shift horizontally.
     * @param top   Where the Thing's left should be.
     */
    public setLeft(thing: IThing, left: number): void {
        thing.left = left;
        thing.right = thing.left + thing.width * this.EightBitter.unitsize;
    }

    /**
     * Shifts a Thing so that it is horizontally centered on the given x.
     * 
     * @param thing   The Thing to shift horizontally.
     * @param x   Where the Thing's horizontal midpoint should be.
     */
    public setMidX(thing: IThing, x: number): void {
        this.setLeft(
            thing,
            x - thing.width * this.EightBitter.unitsize / 2);
    }

    /**
     * Shifts a Thing so that it is vertically centered on the given y.
     * 
     * @param thing   The Thing to shift vertically.
     * @param y   Where the Thing's vertical midpoint should be.
     */
    public setMidY(thing: IThing, y: number): void {
        this.setTop(
            thing,
            y - thing.height * this.EightBitter.unitsize / 2);
    }

    /**
     * Shifts a Thing so that it is centered on the given x and y.
     * 
     * @param thing   The Thing to shift vertically and horizontally.
     * @param x   Where the Thing's horizontal midpoint should be.
     * @param y   Where the Thing's vertical midpoint should be.
     */
    public setMid(thing: IThing, x: number, y: number): void {
        this.setMidX(thing, x);
        this.setMidY(thing, y);
    }

    /**
     * @param thing
     * @returns The horizontal midpoint of the Thing.
     */
    public getMidX(thing: IThing): number {
        return thing.left + thing.width * this.EightBitter.unitsize / 2;
    }

    /**
     * @param thing
     * @returns The vertical midpoint of the Thing.
     */
    public getMidY(thing: IThing): number {
        return thing.top + thing.height * this.EightBitter.unitsize / 2;
    }

    /**
     * Shifts a Thing so that its midpoint is centered on the midpoint of the
     * other Thing.
     * 
     * @param thing   The Thing to be shifted.
     * @param other   The Thing whose midpoint is referenced.
     */
    public setMidObj(thing: IThing, other: IThing): void {
        this.setMidXObj(thing, other);
        this.setMidYObj(thing, other);
    }

    /**
     * Shifts a Thing so that its horizontal midpoint is centered on the 
     * midpoint of the other Thing.
     * 
     * @param thing   The Thing to be shifted horizontally.
     * @param other   The Thing whose horizontal midpoint is referenced.
     */
    public setMidXObj(thing: IThing, other: IThing): void {
        this.setLeft(
            thing,
            this.getMidX(other) - (thing.width * this.EightBitter.unitsize / 2));
    }

    /**
     * Shifts a Thing so that its vertical midpoint is centered on the 
     * midpoint of the other Thing.
     * 
     * @param thing   The Thing to be shifted vertically.
     * @param other   The Thing whose vertical midpoint is referenced.
     */
    public setMidYObj(thing: IThing, other: IThing): void {
        this.setTop(
            thing,
            this.getMidY(other) - (thing.height * this.EightBitter.unitsize / 2));
    }

    /**
     * @param thing
     * @param other
     * @returns Whether the first Thing's midpoint is to the left of the other's.
     */
    public objectToLeft(thing: IThing, other: IThing): boolean {
        return this.getMidX(thing) < this.getMidX(other);
    }

    /**
     * Shifts a Thing's top up, then sets the bottom (similar to a shiftVert and
     * a setTop combined).
     * 
     * @param thing   The Thing to be shifted vertically.
     * @param dy   How far to shift the Thing vertically (by default, 0).
     */
    public updateTop(thing: IThing, dy: number = 0): void {
        thing.top += dy;
        thing.bottom = thing.top + thing.height * this.EightBitter.unitsize;
    }

    /**
     * Shifts a Thing's right, then sets the left (similar to a shiftHoriz and a
     * setRight combined).
     * 
     * @param thing   The Thing to be shifted horizontally.
     * @param dx   How far to shift the Thing horizontally (by default, 0).
     */
    public updateRight(thing: IThing, dx: number = 0): void {
        thing.right += dx;
        thing.left = thing.right - thing.width * this.EightBitter.unitsize;
    }

    /**
     * Shifts a Thing's bottom down, then sets the bottom (similar to a 
     * shiftVert and a setBottom combined).
     * 
     * @param thing   The Thing to be shifted vertically.
     * @param dy   How far to shift the Thing vertically (by default, 0).
     */
    public updateBottom(thing: IThing, dy: number = 0): void {
        thing.bottom += dy;
        thing.top = thing.bottom - thing.height * this.EightBitter.unitsize;
    }

    /**
     * Shifts a Thing's left, then sets the right (similar to a shiftHoriz and a
     * setLeft combined).
     * 
     * @param thing   The Thing to be shifted horizontally.
     * @param dx   How far to shift the Thing horizontally (by default, 0).
     */
    public updateLeft(thing: IThing, dx: number = 0): void {
        thing.left += dx;
        thing.right = thing.left + thing.width * this.EightBitter.unitsize;
    }

    /**
     * Shifts a Thing toward a target x, but limits the total distance allowed.
     * Distance is computed as from the Thing's horizontal midpoint.
     * 
     * @param thing   The Thing to be shifted horizontally.
     * @param x   How far to shift the Thing horizontally.
     * @param maxDistance   The maximum distance the Thing can be shifted (by
     *                      default, Infinity for no maximum).
     */
    public slideToX(thing: IThing, x: number, maxDistance: number = Infinity): void {
        const midx: number = this.getMidX(thing);

        if (midx < x) {
            this.shiftHoriz(thing, Math.min(maxDistance, x - midx));
        } else {
            this.shiftHoriz(thing, Math.max(-maxDistance, x - midx));
        }
    }

    /**
     * Shifts a Thing toward a target y, but limits the total distance allowed.
     * Distance is computed as from the Thing's vertical midpoint.
     * 
     * @param thing   The Thing to be shifted vertically.
     * @param x   How far to shift the Thing vertically.
     * @param maxDistance   The maximum distance the Thing can be shifted (by
     *                      default, Infinity, for no maximum).
     */
    public slideToY(thing: IThing, y: number, maxDistance: number = Infinity): void {
        const midy: number = this.getMidY(thing);

        if (midy < y) {
            this.shiftVert(thing, Math.min(maxDistance, y - midy));
        } else {
            this.shiftVert(thing, Math.max(-maxDistance, y - midy));
        }
    }
}
