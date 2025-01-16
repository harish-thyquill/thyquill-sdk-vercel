const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const isStage = argv.mode === 'stage';

    const envPath = isProduction ? './.env.production' : isStage ? './.env.stage' : './.env.local';

    dotenv.config({ path: envPath });

    return {
        entry: './src/index.ts', // Adjusted entry file path
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: {
                name: 'ThyQuill',
                type: 'umd',
            },
            globalObject: 'this',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[hash:8].[ext]',
                                outputPath: 'assets/svgs',  // Optional: specify the output directory
                            },
                        },
                    ],
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        externals: {
            react: 'react',
            'react-dom': 'react-dom',
        },
        plugins: [
            // DefinePlugin replaces `import.meta.env` references
            new webpack.DefinePlugin({
                'import.meta.env': JSON.stringify({
                    NODE_ENV: JSON.stringify(argv.mode),
                    VITE_APP_SERVER_HOST_PROTOCOL: process.env.VITE_APP_SERVER_HOST_PROTOCOL,
                    VITE_APP_SERVER_HOST: process.env.VITE_APP_SERVER_HOST,
                    VITE_APP_API_URL: process.env.VITE_APP_API_URL,
                    // Add more environment variables as needed
                }),
            }),
        ],
        mode: 'production', // Optimized for npm
    }
};
