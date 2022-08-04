// Global Storybook SCSS Style
import '/src/styles/styles.scss';

// Storybook Preview Configuration
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: process.env.STORYBOOK_THEME_COLOR_WHITE },
      { name: 'black', value: process.env.STORYBOOK_THEME_COLOR_BLACK },
      { name: 'light', value: process.env.STORYBOOK_THEME_COLOR_LIGHT },
      { name: 'dark', value: process.env.STORYBOOK_THEME_COLOR_DARK },
      { name: 'primary', value: process.env.STORYBOOK_THEME_COLOR_PRIMARY },
      { name: 'secondary', value: process.env.STORYBOOK_THEME_COLOR_SECONDARY },
    ]
  }
}