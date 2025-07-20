import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VDateInput } from 'vuetify/labs/VDateInput';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#1C1C1E', // iPhone Dark Mode Background
            surface: '#2C2C2E',    // iPhone Dark Mode Surface
            primary: '#0A84FF',    // iPhone Blue
            secondary: '#64D2FF',  // Lighter Blue
            accent: '#BF5AF2',     // Purple
            error: '#FF453A',      // Red
            info: '#63D2FF',       // Light Blue
            success: '#30D158',    // Green
            warning: '#FFD60A',    // Yellow
          },
        },
      },
    },
    components: {
      VDateInput,
    },
  });
  app.vueApp.use(vuetify);
});
