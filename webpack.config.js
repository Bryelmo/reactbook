const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const variables = process.env.STORYBOOK_THEME_COLORS.split(', ');

module.exports = {
	entry: {
		bundle: './src/index.cdn.tsx',
	},
	output: {
		path: path.resolve(__dirname, './cdn'),
	},
	module: {
		rules: [
		  {
			test: /\.(ts|js)x?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		  },
		  {
			test: /\.s[ac]ss$/i,
			use: [
			  	'style-loader',
			  	'css-loader',
			  	{
					loader: 'sass-loader',
					options: {
						additionalData: () => {
							let variablesArray = [];
							variables.forEach((variable) => {
								const array = variable.split('_');
								const variableName = `$${array[array.length - 1].toLowerCase()}`;
								variablesArray.push(`${variableName}: ${process.env[variable]};`);
							});
							return variablesArray.join(" ");
						},
					},
				}
			],
		  },
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};