import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

import { md3 } from 'vuetify/blueprints';

const light = {
  dark: true,
  colors: {
    primary: '#62F7FE',
    secondary: '#090088',
    background: '#10124B',
    dark: '#03002e',
    'text-lighter': 'rgba(2,64,111,0.73)',
  },

  /*
  Logo:
      #710193
      #031F4F
      #01406D
      #04B4DD
      #08BAE0
      #62F7FE
   */
};

export default defineVuetifyConfiguration(() => ({
  blueprint: md3,
  defaultTheme: 'light',
  theme: {
    themes: {
      light,
    },
  },
  defaults: {
    VSheet: {
      color: 'transparent',
    },
    VTextField: {
      class: 'mb-2',
      variant: 'outlined',
      color: 'primary',
      rules: [(v) => !!v || 'Dit veld is verplicht'],
    },
    VTextarea: {
      class: 'mb-2',
      variant: 'outlined',
      color: 'primary',
      rules: [(v) => !!v || 'Dit veld is verplicht'],
    },
  },
}));
