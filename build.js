const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const variablesScss = fs.createWriteStream(path.resolve(__dirname, './dist/styles/variables.scss'), { flags: 'a'});

const variables = process.env.STORYBOOK_THEME_COLORS.split(', ');

variables.forEach((variable) => {
    const array = variable.split('_');
    const variableName = `$${array[array.length - 1].toLowerCase()}`;
    variablesScss.write(`${variableName}: ${process.env[variable]};\n`);
});