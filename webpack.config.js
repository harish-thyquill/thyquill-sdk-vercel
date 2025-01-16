import path from "path";
import dotenv from "dotenv";
import webpack from "webpack";

const webpackConfig = (evn, argv) => {
    const isProduction = argv.mode === 'production';
    const isStage = argv.mode === 'stage';

    const envPath = isProduction ? './.env.production' : isStage ? './.env.stage' : './.env.local';

    dotenv.config({ path: envPath });

    return {
        entry: './src/export/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(process.cwd(), "dist"),
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // resolve JS/TS and JSX/TSX files
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
                    test: /\.scss$/, // Match .scss files
                    use: [
                        'style-loader',  // Injects styles into the DOM
                        'css-loader',    // Resolves CSS imports
                        'sass-loader'    // Compiles SCSS to CSS
                    ]
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/, // handle React/JSX or TypeScript files
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
                        },
                    },
                },
                {
                    test: /\.css$/, // handle CSS files
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            // DefinePlugin replaces `process.env` references
            new webpack.DefinePlugin({
                'process.env': JSON.stringify({
                    NODE_ENV: JSON.stringify(argv.mode === "stage" ? "production" : "local"),
                    SERVER_HOST_PROTOCOL: process.env.SERVER_HOST_PROTOCOL,
                    SERVER_HOST: process.env.SERVER_HOST,
                    API_URL: process.env.API_URL,
                    // Add more environment variables as needed
                }),
            }),
        ],
        devServer: {
            static: path.resolve(process.cwd(), "public"), // serve files from public directory
            compress: true,
            port: 3000, // adjust the port number as needed
        },
        mode: 'production',
    }
};

export default webpackConfig;
