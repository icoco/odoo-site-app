import 'virtual:uno.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

// https://unocss.dev/guide/style-reset#tailwind-compat
// 此重置基于 Tailwind 重置，减去按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请参阅链接的问题。
import '@unocss/reset/tailwind-compat.css'

// Register icon sprite
import 'virtual:svg-icons-register'
import { Card, Grid, GridItem } from 'vant'

import { createApp } from 'vue'


import { DefaultClientManagerOption, getClientManager, profile } from 'odoo-webclient'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from '@/store'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const getSdk = computed(() => {
  return userStore.getSdk
})

profile('Vue Demo App')

async function initOdooWebSDK() {
  const option = new DefaultClientManagerOption()
  option.root = ''
  getClientManager().setup(option)
  console.debug('⚙️ initOdooWebSDK', option)
  getClientManager().mounted((event)=>{
    console.debug(`🪝 mounted: event? `,event);
  });

  // @step get cached session sdk scripts
  const scriptTags = getSdk.value;
  if (scriptTags) {
    console.debug('initOdooWebSDK, sdk?', scriptTags);
    // @step load webclient
    getClientManager().loadClient(scriptTags).subscribe({next:(r)=>{
     console.debug('Success loadClient, r?',r);
    },error:(e)=>{
      console.debug('Failed loadClient, e?',e);
    }});
  }  
}

function loginWithClient(){
   // if no cache then login 
   const login = 'admin';
   const password = 'admin';
   getClientManager().login(login,password).subscribe({
    next:(r)=>{
      console.debug('after autologin',r)
    }
   });
}

async function bootstrap() {
  const app = createApp(App)
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  setupRouter(app)
  await router.isReady()

  // @step 
  await initOdooWebSDK()
  
  app.use(Card)
  app.use(Grid)
  app.use(GridItem)

  // 路由准备就绪后挂载APP实例
  app.mount('#app', true)
}

void bootstrap()
