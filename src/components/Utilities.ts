import { Component } from "../Component";
import { EightBittr } from "../EightBittr";

/**
 * Miscellaneous utilities used by EightBittr instances.
 */
export class Utilities<TGameStartr extends EightBittr> extends Component<TGameStartr> {
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
    public proliferate(recipient: any, donor: any, noOverride?: boolean): any {
        // For each attribute of the donor:
        for (const i in donor) {
            if (!donor.hasOwnProperty(i)) {
                continue;
            }

            // If noOverride, don't override already existing properties
            if (noOverride && recipient.hasOwnProperty(i)) {
                continue;
            }

            // If it's an object, recurse on a new version of it
            const setting: any = donor[i];
            if (typeof setting === "object") {
                if (!recipient.hasOwnProperty(i)) {
                    recipient[i] = new setting.constructor();
                }
                this.proliferate(recipient[i], setting, noOverride);
            } else {
                // Regular primitives are easy to copy otherwise
                recipient[i] = setting;
            }
        }

        return recipient;
    }

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
    public proliferateHard(recipient: any, donor: any, noOverride?: boolean): any {
        // For each attribute of the donor:
        for (const i in donor) {
            if (!donor.hasOwnProperty(i)) {
                continue;
            }

            // If noOverride, don't override already existing properties
            if (noOverride && recipient[i]) {
                continue;
            }

            // If it's an object, recurse on a new version of it
            const setting: any = donor[i];
            if (typeof setting === "object") {
                if (!recipient[i]) {
                    recipient[i] = new setting.constructor();
                }
                this.proliferate(recipient[i], setting, noOverride);
            } else {
                // Regular primitives are easy to copy otherwise
                recipient[i] = setting;
            }
        }
        return recipient;
    }

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
    public proliferateElement(recipient: HTMLElement, donor: any, noOverride?: boolean): HTMLElement {
        // For each attribute of the donor:
        for (const i in donor) {
            if (!donor.hasOwnProperty(i)) {
                continue;
            }

            // If noOverride, don't override already existing properties
            if (noOverride && recipient.hasOwnProperty(i)) {
                continue;
            }

            const setting: any = donor[i];

            // Special cases for HTML elements
            switch (i) {
                // Children and options: just append all of them directly
                case "children":
                case "options":
                    if (typeof setting !== "undefined") {
                        for (const child of (setting as HTMLElement[])) {
                            recipient.appendChild(child);
                        }
                    }
                    break;

                // Style: proliferate (instead of making a new Object)
                case "style":
                    this.proliferate(recipient.style, setting);
                    break;

                // By default, use the normal proliferate logic
                default:
                    // If it's null, don't do anything (like .textContent)
                    // tslint:disable no-null-keyword
                    if (setting === null) {
                        break;
                    }

                    if (typeof setting === "object") {
                        // If it's an object, recurse on a new version of it
                        if (!recipient.hasOwnProperty(i)) {
                            (recipient as any)[i] = new setting.constructor();
                        }
                        this.proliferate((recipient as any)[i], setting, noOverride);
                    } else {
                        // Regular primitives are easy to copy otherwise
                        (recipient as any)[i] = setting;
                    }
                    break;
            }
        }

        return recipient;
    }

    /**
     * Creates and returns an HTMLElement of the specified type. Any additional
     * settings Objects may be given to be proliferated onto the Element via
     * proliferateElement.
     * 
     * @param type   The tag of the Element to be created.
     * @param settings   Additional settings to proliferated onto the Element.
     * @returns {HTMLElement}
     */
    public createElement(tag?: string, ...args: any[]): HTMLElement {
        const element: HTMLElement = document.createElement(tag || "div");

        // For each provided object, add those settings to the element
        for (const arg of args) {
            this.proliferateElement(element, arg);
        }

        return element;
    }

    /**
     * Creates and returns a new HTML <canvas> element with no image smoothing.
     * 
     * @param width   How wide the canvas should be.
     * @param height   How tall the canvas should be.
     * @returns A canvas of the given width and height height.
     */
    public createCanvas(width: number, height: number): HTMLCanvasElement {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        const context: any = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        // For speed's sake, disable image smoothing in the first supported browser
        if (typeof context.imageSmoothingEnabled !== "undefined") {
            context.imageSmoothingEnabled = false;
        } else if (typeof context.webkitImageSmoothingEnabled !== "undefined") {
            context.webkitImageSmoothingEnabled = false;
        } else if (typeof context.mozImageSmoothingEnabled !== "undefined") {
            context.mozImageSmoothingEnabled = false;
        } else if (typeof context.msImageSmoothingEnabled !== "undefined") {
            context.msImageSmoothingEnabled = false;
        } else if (typeof context.oImageSmoothingEnabled !== "undefined") {
            context.oImageSmoothingEnabled = false;
        }

        return canvas;
    }

    /**
     * Follows a path inside an Object recursively, based on a given path.
     * 
     * @param object   A container to follow a path inside.
     * @param path   The ordered names of attributes to descend into.
     * @param num   The starting index in path (by default, 0).
     * @returns The discovered property within object, or undefined if the
     *          full path doesn't exist.
     */
    public followPathHard(object: any, path: string[], index: number = 0): any {
        for (let i: number = index; i < path.length; i += 1) {
            if (typeof object[path[i]] === "undefined") {
                return undefined;
            }

            object = object[path[i]];
        }

        return object;
    }

    /**
     * Switches an object from one Array to another using splice and push.
     * 
     * @param object    The object to move between Arrays.
     * @param arrayOld   The Array to take the object out of.
     * @param arrayNew   The Array to move the object into.
     */
    public arraySwitch(object: any, arrayOld: any[], arrayNew: any[]): void {
        arrayOld.splice(arrayOld.indexOf(object), 1);
        arrayNew.push(object);
    }

    /**
     * Sets a Thing's position within an Array to the front by splicing and then
     * unshifting it.
     * 
     * @param object   The object to move within the Array.
     * @param array   An Array currently containing the object.
     */
    public arrayToBeginning(object: any, array: any[]): void {
        array.splice(array.indexOf(object), 1);
        array.unshift(object);
    }

    /**
     * Sets a Thing's position within an Array to the front by splicing and then
     * pushing it.
     * 
     * @param object   The object to move within the Array.
     * @param array   An Array currently containing the object.
     */
    public arrayToEnd(object: any, array: any[]): void {
        array.splice(array.indexOf(object), 1);
        array.push(object);
    }

    /**
     * Sets a Thing's position within an Array to a specific index by splicing 
     * it out, then back in.
     * 
     * @param object   The object to move within the Array.
     * @param array   An Array currently containing the object.
     * @param index   Where the object should be moved to in the Array.
     */
    public arrayToIndex(object: any, array: any[], index: number): void {
        array.splice(array.indexOf(object), 1);
        array.splice(index, 0, object);
    }
}
