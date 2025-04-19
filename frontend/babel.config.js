module.exports = {
    presets: [
        'module:@react-native/babel-preset',
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
    ],
    plugins: [
        ['module:react-native-dotenv', {
            moduleName: '@env',
            path: '.env',
            blocklist: null,
            allowlist: null,
            safe: false,
            allowUndefined: true,
        }],
    ],
};
