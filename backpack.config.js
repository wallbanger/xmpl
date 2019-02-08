module.exports = {
    webpack: (config) => {
        config.entry.main = [
            './src/server/index.js'
        ];

        return config
    }
};
