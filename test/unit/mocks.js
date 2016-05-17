define(["EightBittr"], function (EightBittrModule) {
    var EightBittr = EightBittrModule.EightBittr;

    var mocks = {
        /**
         * 
         */
        mockEightBittr: function (unitsize) {
            return new EightBittr(unitsize || 2)
        },

        /**
         * 
         */
        mockThing: function () {
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
        mockPhysics: function (EightBitter) {
            return (EightBitter || mocks.mockEightBittr()).physics;
        },

        /**
         * 
         */
        mockUtilities: function (EightBitter) {
            return (EightBitter || mocks.mockEightBittr()).utilities;
        }
    };

    return mocks;
});
