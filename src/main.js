import { createApp } from 'vue'
import App from './App.vue'
import { msalInstance } from '@/lib/microsoftGraph.js'

async function bootstrap() {
    // attends que MSAL soit prêt
    await msalInstance.initialize()
  
    // puis monte ton appli
    createApp(App)
      .provide('msal', msalInstance)
      .mount('#app')
  }
  
  bootstrap()
