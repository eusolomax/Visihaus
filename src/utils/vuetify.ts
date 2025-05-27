import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

const Visihaus_Default: ThemeDefinition = {
  dark: true,
  colors: {}
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'Visihaus_Default',
    themes: {
      Visihaus_Default,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

  defaults: {
    VBtn: {
      class: 'text-none',
    },
  },

  display: {
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  }
})

export default vuetify