const EightBittr = require("../src/EightBittr").EightBittr;

const mocks = {
    /**
     * 
     */
    mockEightBittr: unitsize =>  new EightBittr(unitsize || 2),

    /**
     * 
     */
    mockThing: () => {
        return {
            width: 7,
            height: 14,
            top: 14,
            right: 42,
            bottom: 28,
            left: 35
        };
    },

    /**
     * 
     */
    mockPhysics: EightBitter => (EightBitter || mocks.mockEightBittr()).physics,

    /**
     * 
     */
    mockUtilities: EightBitter => (EightBitter || mocks.mockEightBittr()).utilities
};

exports.mocks = mocks;