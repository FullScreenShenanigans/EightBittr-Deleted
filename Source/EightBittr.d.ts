declare module EightBittr {
    /**
     * A basic representation of an in-game Thing. Size, velocity, and position
     * are stored, as well as a reference to the parent IEightBittr.
     */
    export interface IThing {
        EightBitter: IEightBittr;
        top: number;
        right: number;
        bottom: number;
        left: number;
        width: number;
        height: number;
        xvel: number;
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

    /**
     * An interface used exclusively as the parent of IGameStartr. IEightBittr
     * contains useful functions for manipulating IThings that are independent of
     * the required GameStartr modules.
     */
    export interface IEightBittr {
        /**
         * How much to expand each pixel from raw sizing measurements to in-game.
         */
        unitsize: number;

        /**
         * Resets the EightBittr by calling all of the named reset member Functions
         * on itself.
         * 
         * @param EightBitter
         * @param resets   The ordered Array of reset Functions to be called.
         * @param customs   Additional arguments to pass to all reset Functions.
         */
        reset(EightBitter: IEightBittr, resets: string[], customs?: any): void;

        /**
         * Resets the EightBittr in a timed manner by calling all the named reset
         * member Functions on itself and adding the time (in milliseconds) along 
         * along with the total process time to an Array, which is then returned.
         * 
         * @param EightBitter
         * @param resets   The ordered Array of reset Functions to be called.
         * @param customs   Additional arguments to pass to all reset Functions.
         * @returns A summary of itmes for reset Functions and the overall operation.
         */
        resetTimed(EightBitter: IEightBittr, resets: string[], customs?: any): IResetTimes;

        /**
         * Creates and returns a new HTML <canvas> element, with an optional scaling
         * multiplier. Image smoothing is disabled.
         * 
         * @param width   How wide the canvas should be.
         * @param height   How tall the canvas should be.
         * @param scaling   How much to scale the style of the canvas (by default, 1
         *                  for not at all).
         * @returns A canvas of the given width, height, and scaling.
         * @remarks TypeScript does not recognize imageSmoothingEnabled unless
         *          prefixed by "ms", so context is cast to any.
         */
        createCanvas(width: number, height: number, scaling?: number): HTMLCanvasElement;

        /**
         * Shifts a Thing vertically by changing its top and bottom attributes.
         * 
         * @param thing   The Thing to shift vertically.
         * @param dy   How far to shift the Thing.
         */
        shiftVert(thing: IThing, dy: number): void;

        /**
         * Shifts a Thing horizontally by changing its top and bottom attributes.
         * 
         * @param thing   The Thing to shift horizontally.
         * @param dy   How far to shift the Thing.
         */
        shiftHoriz(thing: IThing, dx: number): void;

        /**
         * Sets the top of a Thing to a set number, changing the bottom based on its
         * height and the EightBittr's unisize.
         * 
         * @param thing   The Thing to shift vertically.
         * @param top   Where the Thing's top should be.
         */
        setTop(thing: IThing, top: number): void;

        /**
         * Sets the right of a Thing to a set number, changing the left based on its
         * width and the EightBittr's unisize.
         * 
         * @param thing   The Thing to shift horizontally.
         * @param top   Where the Thing's right should be.
         */
        setRight(thing: IThing, right: number): void;

        /**
         * Sets the bottom of a Thing to a set number, changing the top based on its
         * height and the EightBittr's unisize.
         * 
         * @param thing   The Thing to shift vertically.
         * @param top   Where the Thing's bottom should be.
         */
        setBottom(thing: IThing, bottom: number): void;

        /**
         * Sets the left of a Thing to a set number, changing the right based on its
         * width and the EightBittr's unisize.
         * 
         * @param thing   The Thing to shift horizontally.
         * @param top   Where the Thing's left should be.
         */
        setLeft(thing: IThing, left: number): void;

        /**
         * Shifts a Thing so that it is horizontally centered on the given x.
         * 
         * @param thing   The Thing to shift horizontally.
         * @param x   Where the Thing's horizontal midpoint should be.
         */
        setMidX(thing: IThing, x: number): void;

        /**
         * Shifts a Thing so that it is vertically centered on the given y.
         * 
         * @param thing   The Thing to shift vertically.
         * @param y   Where the Thing's vertical midpoint should be.
         */
        setMidY(thing: IThing, y: number): void;

        /**
         * Shifts a Thing so that it is centered on the given x and y.
         * 
         * @param thing   The Thing to shift vertically and horizontally.
         * @param x   Where the Thing's horizontal midpoint should be.
         * @param y   Where the Thing's vertical midpoint should be.
         */
        setMid(thing: IThing, x: number, y: number): void;

        /**
         * @param thing
         * @returns The horizontal midpoint of the Thing.
         */
        getMidX(thing: IThing): number;

        /**
         * @param thing
         * @returns The vertical midpoint of the Thing.
         */
        getMidY(thing: IThing): number;

        /**
         * Shifts a Thing so that its midpoint is centered on the midpoint of the
         * other Thing.
         * 
         * @param thing   The Thing to be shifted.
         * @param other   The Thing whose midpoint is referenced.
         */
        setMidObj(thing: IThing, other: IThing): void;

        /**
         * Shifts a Thing so that its horizontal midpoint is centered on the 
         * midpoint of the other Thing.
         * 
         * @param thing   The Thing to be shifted horizontally.
         * @param other   The Thing whose horizontal midpoint is referenced.
         */
        setMidXObj(thing: IThing, other: IThing): void;

        /**
         * Shifts a Thing so that its vertical midpoint is centered on the 
         * midpoint of the other Thing.
         * 
         * @param thing   The Thing to be shifted vertically.
         * @param other   The Thing whose vertical midpoint is referenced.
         */
        setMidYObj(thing: IThing, other: IThing): void;

        /**
         * @param thing
         * @param other
         * @returns Whether the first Thing's midpoint is to the left of the other's.
         */
        objectToLeft(thing: IThing, other: IThing): boolean;

        /**
         * Shifts a Thing's top up, then sets the bottom (similar to a shiftVert and
         * a setTop combined).
         * 
         * @param thing   The Thing to be shifted vertically.
         * @param dy   How far to shift the Thing vertically.
         */
        updateTop(thing: IThing, dy: number): void;

        /**
         * Shifts a Thing's right, then sets the left (similar to a shiftHoriz and a
         * setRight combined).
         * 
         * @param thing   The Thing to be shifted horizontally.
         * @param dx   How far to shift the Thing horizontally.
         */
        updateRight(thing: IThing, dx: number): void;

        /**
         * Shifts a Thing's bottom down, then sets the bottom (similar to a 
         * shiftVert and a setBottom combined).
         * 
         * @param thing   The Thing to be shifted vertically.
         * @param dy   How far to shift the Thing vertically.
         */
        updateBottom(thing: IThing, dy: number): void;

        /**
         * Shifts a Thing's left, then sets the right (similar to a shiftHoriz and a
         * setLeft combined).
         * 
         * @param thing   The Thing to be shifted horizontally.
         * @param dx   How far to shift the Thing horizontally.
         */
        updateLeft(thing: IThing, dx: number): void;

        /**
         * Shifts a Thing toward a target x, but limits the total distance allowed.
         * Distance is computed as from the Thing's horizontal midpoint.
         * 
         * @param thing   The Thing to be shifted horizontally.
         * @param x   How far to shift the Thing horizontally.
         * @param maxDistance   The maximum distance the Thing can be shifted.
         */
        slideToX(thing: IThing, x: number, maxDistance: number): void;

        /**
         * Shifts a Thing toward a target y, but limits the total distance allowed.
         * Distance is computed as from the Thing's vertical midpoint.
         * 
         * @param thing   The Thing to be shifted vertically.
         * @param x   How far to shift the Thing vertically.
         * @param maxDistance   The maximum distance the Thing can be shifted.
         */
        slideToY(thing: IThing, y: number, maxDistance: number): void;

        /**
         * Ensures the current object is an EightBittr by throwing an error if it 
         * is not. This should be used for functions in any EightBittr descendants
         * that have to call 'this' to ensure their caller is what the programmer
         * expected it to be.
         * 
         * @param current   The scope that should be an EightBittr.
         */
        ensureCorrectCaller(current: any): IEightBittr;

        /**
         * "Proliferates" all properties of a donor onto a recipient by copying each
         * of them and recursing onto child Objects. This is a deep copy.
         * 
         * @param recipient   An object to receive properties from the donor.
         * @param donor   An object do donoate properties to the recipient.
         * @param noOverride   Whether pre-existing properties of the recipient should 
         *                     be skipped (defaults to false).
         * @returns recipient
         */
        proliferate(recipient: any, donor: any, noOverride?: boolean): any;

        /**
         * Identical to proliferate, but instead of checking whether the recipient
         * hasOwnProperty on properties, it just checks if they're truthy.
         * 
         * @param recipient   An object to receive properties from the donor.
         * @param donor   An object do donoate properties to the recipient.
         * @param noOverride   Whether pre-existing properties of the recipient should 
         *                     be skipped (defaults to false).
         * @returns recipient
         */
        proliferateHard(recipient: any, donor: any, noOverride?: boolean): any;

        /**
         * Identical to proliferate, but tailored for HTML elements because many
         * element attributes don't play nicely with JavaScript Array standards. 
         * Looking at you, HTMLCollection!
         * 
         * @param recipient   An HTMLElement to receive properties from the donor.
         * @param donor   An object do donoate properties to the recipient.
         * @param noOverride   Whether pre-existing properties of the recipient should 
         *                     be skipped (defaults to false).
         * @returns recipient
         */
        proliferateElement(recipient: HTMLElement, donor: any, noOverride?: boolean): HTMLElement;

        /**
         * Creates and returns an HTMLElement of the specified type. Any additional
         * settings Objects may be given to be proliferated onto the Element via
         * proliferateElement.
         * 
         * @param type   The tag of the Element to be created.
         * @param settings   Additional settings to proliferated onto the Element.
         * @returns {HTMLElement}
         */
        createElement(tag?: string, ...args: any[]): HTMLElement;

        /**
         * Follows a path inside an Object recursively, based on a given path.
         * 
         * @param object   A container to follow a path inside.
         * @param path   The ordered names of attributes to descend into.
         * @param num   The starting index in path (by default, 0).
         * @returns The discovered property within object, or undefined if the
         *          full path doesn't exist.
         */
        followPathHard(object: any, path: string[], index?: number): any;

        /**
         * Switches an object from one Array to another using splice and push.
         * 
         * @param object    The object to move between Arrays.
         * @param arrayOld   The Array to take the object out of.
         * @param arrayNew   The Array to move the object into.
         */
        arraySwitch(object: any, arrayOld: any[], arrayNew: any[]): void;

        /**
         * Sets a Thing's position within an Array to the front by splicing and then
         * unshifting it.
         * 
         * @param object   The object to move within the Array.
         * @param array   An Array currently containing the object.
         */
        arrayToBeginning(object: any, array: any[]): void;

        /**
         * Sets a Thing's position within an Array to the front by splicing and then
         * pushing it.
         * 
         * @param object   The object to move within the Array.
         * @param array   An Array currently containing the object.
         */
        arrayToEnd(object: any, array: any[]): void;

        /**
         * Sets a Thing's position within an Array to a specific index by splicing 
         * it out, then back in.
         * 
         * @param object   The object to move within the Array.
         * @param array   An Array currently containing the object.
         * @param index   Where the object should be moved to in the Array.
         */
        arrayToIndex(object: any, array: any[], index: number): void;
    }
}
