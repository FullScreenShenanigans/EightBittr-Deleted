const fs = require("fs");

fs.readdirSync("test")
    .filter(className => className.indexOf(".") === -1)
    .forEach(className => {
        describe(className, () => {
            fs.readdirSync(`test/${className}`)
                .forEach(functionName => {
                    describe(
                        functionName.split(".")[0],
                        () => require(`./${className}/${functionName}`));
                });
        });
    });
