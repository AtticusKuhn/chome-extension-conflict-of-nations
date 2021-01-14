// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /injected\/.*\.ts$/i,
                use: "raw-loader",
            },
        ],
    },
};
