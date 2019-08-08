const webpackMerge = require("webpack-merge");
const commonConfig = require("./build-utils/webpack.common");


// This is the main webpack config file. It merges a common config with an environment specific config.

const addons = (addonsArg) =>{
    const addonsArr = []
        .concat.apply([], [addonsArg])
        .filter(Boolean);
    return addonsArr.map((addonName)=>require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = (env)=>{
    if (!env) {
        throw new Error("You must pass an --env.env flag into your build for webpack to work!");
    }
    // require environment specific config passed in env
    const envConfig = require(`./build-utils/webpack.${env.env}.js`);
    // merge common config with environment config
    const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

    return mergedConfig;
};
