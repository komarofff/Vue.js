import { createApp ,defineAsyncComponent} from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'


import './theme.css'
// createApp(App).mount('#app')
const app = createApp(App)
app.component('the-header',TheHeader)
app.component('async-component',defineAsyncComponent(()=>{
  return import('./AppAssyncComponent')
}))
app.mount('#app')
