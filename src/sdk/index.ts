import type { App } from 'vue'
import scriptNodes from './scriptNodes.vue'

export declare interface WebSDK {
  install: (app: App) => void

  use: (plugin: WebSDK) => WebSDK

  odoo: () => any

  getInstance: () => any

}
interface Client {

}
const webClient: WebSDK = {
  install: (app: App) => {
    app.config.globalProperties.$webClient = this
  },

  use(plugin: WebSDK): WebSDK {
    return this
  },
  odoo() {
    return globalThis.odoo
  },
  getInstance() {
    return this.odoo().__WOWL_DEBUG__
  },

}

export function setupWebClient(app: App<Element>) {
  app.use(webClient)
}

export { webClient }

export default scriptNodes
