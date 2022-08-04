
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    const scssRuleIndex = config.module.rules.findIndex((rule) => ( String(rule.test) == String(/\.s[ca]ss$/) ));
    config.module.rules[scssRuleIndex] = setStyleLoader();
    return config;
  },
};

/**
 *  This function sets an array with SCSS variables
 *  and it puts as additionalData on sass-loader options
 *  and returns the webpack rule object
 *  @return {Object} Overrided Storybook Webpack Scss Rule
*/
const setStyleLoader = () => {

  const variables = [
    '$primary:' + process.env.STORYBOOK_THEME_COLOR_PRIMARY  + ';',
    '$secondary:' + process.env.STORYBOOK_THEME_COLOR_SECONDARY  + ';',
    '$light:' + process.env.STORYBOOK_THEME_COLOR_LIGHT  + ';',
    '$dark:' + process.env.STORYBOOK_THEME_COLOR_DARK  + ';',
    '$white:' + process.env.STORYBOOK_THEME_COLOR_WHITE  + ';',
    '$black:' + process.env.STORYBOOK_THEME_COLOR_BLACK  + ';'
  ]

  const additionalData = {
    test: /\.s[ca]ss$/,
    use: [
      { loader: 'style-loader'},
      { loader: 'css-loader' },
      {
        loader: "sass-loader",
        options: { additionalData: variables.join(' ') }
      },
    ],
  };

  return additionalData;

}