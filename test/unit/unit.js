var sources = (function () {
    var config = {
        paths: {
            // Source code
            "Component": "../../src/Component",
            "Physics": "../../src/Physics",
            "Utilities": "../../src/Utilities",
            "EightBittr": "../../src/EightBittr",
            // External libraries
            "chai": "../../node_modules/chai/chai"
        }
    };

    requirejs.config(config);

    return Object.keys(config.paths).concat("mocks");
})();

var tests = {
    "Physics": [
        "setTop",
        "setRight",
        "setBottom",
        "setLeft",
        "setMidX",
        "setMidY",
        "setMid",
        "setMidXObj",
        "setMidYObj",
        "setMidObj",
        "shiftHoriz",
        "shiftVert",
        "slideToX",
        "slideToY",
        "thingAbove",
        "thingToLeft",
        "updateTop",
        "updateRight",
        "updateBottom",
        "updateLeft"
    ],
    "Utilities": [
        "proliferate",
        "proliferateHard",
        "followPathHard",
        "arraySwitch",
        "arrayToBeginning",
        "arrayToEnd",
        "arrayToIndex",
    ]
};

require(sources, function () {
    var classTests = {};
    var requiredTests = 0;
    var loadedTests = 0;

    var runTests = function () {
        mocha.setup("bdd");

        for (var className in classTests) {
            describe(className, function () {
                for (var functionName in classTests[className]) {
                    describe(functionName, classTests[className][functionName]);
                }
            });
        }

        mocha.run();
    };

    var generateOnTestLoad = function (className, functionName) {
        requiredTests += 1;

        return function (functionTests) {
            classTests[className][functionName] = functionTests;
            loadedTests += 1;

            if (loadedTests === requiredTests) {
                runTests();
            }
        }
    }

    for (var className in tests) {
        classTests[className] = {};

        tests[className].forEach(function (functionName) {
            require(
                [className + "Tests/" + functionName],
                generateOnTestLoad(className, functionName));
        });
    }
});