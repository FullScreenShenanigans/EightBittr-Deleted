/// <reference path="../../lib/EightBittr.d.ts" />

const mocks = {
    /**
     * 
     */
    mockEightBittr: (unitsize: number): EightBittr.IEightBittr => {
        return new EightBittr.EightBittr(unitsize || 2);
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
    mockPhysics: (EightBitter: EightBittr.IEightBittr = mocks.mockEightBittr()): EightBittr.Physics<EightBittr.IEightBittr> => {
        return EightBitter.physics;
    },

    /**
     * 
     */
    mockUtilities: (EightBitter: EightBittr.IEightBittr = mocks.mockEightBittr()): EightBittr.Utilities<EightBittr.IEightBittr> => {
        return EightBitter.utilities;
    }
};
