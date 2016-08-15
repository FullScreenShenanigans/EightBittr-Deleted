/// <reference path="../../lib/EightBittr.d.ts" />

/**
 * Mock implementation of EightBittr.
 */
class MockEightBittr extends EightBittr.EightBittr {
    /**
     * Sets the system components.
     */
    public resetComponents(): void {
        this.physics = new EightBittr.Physics(this);
        this.utilities = new EightBittr.Utilities(this);
    }
}

const mocks = {
    /**
     * 
     */
    mockEightBittr: (unitsize: number): EightBittr.EightBittr => {
        return new MockEightBittr(unitsize || 2);
    },

    /**
     * 
     */
    mockThing: (): EightBittr.IThing => {
        return {
            width: 7,
            height: 14,
            top: 14,
            right: 42,
            bottom: 28,
            left: 35,
            xvel: 0,
            yvel: 0
        };
    },

    /**
     * 
     */
    mockPhysics: (EightBitter: EightBittr.EightBittr = mocks.mockEightBittr()): EightBittr.Physics<EightBittr.EightBittr> => {
        return EightBitter.physics;
    },

    /**
     * 
     */
    mockUtilities: (EightBitter: EightBittr.EightBittr = mocks.mockEightBittr()): EightBittr.Utilities<EightBittr.EightBittr> => {
        return EightBitter.utilities;
    }
};
