<template>
  <div class="h-screen items-center justify-center">
    <div class="my-card m-t-5px  m-l-10px m-r-10px rounded-2xl p-30px shadow-xl">
      <div class="flex flex-col items-center justify-center ">
       
        <div align="center">
          <a href="https://github.com/ixkit/odoo-site-app">
            <span style="font-size:50px;">🏪</span>
          </a>
          <br>
          <a href="https://github.com/ixkit/odoo-site-app">
            <img alt="Odoo Site App" width="20%" height="20%" src="/img/odoo_logo.png"/>
          </a>
        </div>
        <div class="text-darkBlue dark:text-garyWhite text-1xl mb-2 mt-2 text-center font-black">
          {{ title }}
        </div>
        <div class="text-center">
          👉 Seamless reuse the powerful capability of Odoo framework from outside Client Apps.<br>👉 Invoke ORM service handily, maximize the value of the services that implemeted by Python🐍 code.
        </div>
      </div>
    </div>

    <div>
      <!--  class="h-screen flex flex-col items-center justify-center p-10px" -->

      <div class="mb-2 mt-4 w-full">
        <!-- :column-num="3" -->
        <van-grid direction="horizontal">
          <van-grid-item v-for="row in dataSet" :key="row" :icon="`/odoo${row.icon}`" :text="row.shortdesc" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// getCurrentInstance获取当前组件实例的上下文信息
import { getCurrentInstance, onMounted, ref } from 'vue'
// 表示当前组件实例的类型
import type { ComponentInternalInstance } from 'vue'

import { getClientManager } from 'odoo-webclient'
import { useDesignSettingStore } from '@/store/modules/designSetting'
import { useGlobSetting } from '@/hooks/setting'
import Logo from '@/components/Logo.vue'
 

defineOptions({
  name: 'AppsPage',
})

// 获取proxy属性 可以访问挂载在全局的实例和方法(需要断言 否则ts报错)
const { proxy } = getCurrentInstance() as ComponentInternalInstance
 
/*
  {eventName: 'mounted', args: Array(1)}
*/
getClientManager().mounted((event)=>{
    console.debug(`🪝 mounted: event?`,event); 
    reloadData();
  });

 
function reloadData(){
    const webClient = getClientManager().getWebClient(); 
    console.debug(`🪝 webClient?`,webClient); 
    if (!webClient){
      return;
    }
    fetchApps(webClient)

}
async function fetchApps(webClient) {
  console.debug('⚡️ getWebClient', webClient)

  const orm = webClient.orm
  // http://localhost:8120/web/dataset/call_kw/ir.module.module/web_search_
  const specification = {
    icon: {},
    icon_flag: {},
    to_buy: {},
    name: {},
    state: {},
    summary: {},
    website: {},
    application: {},
    module_type: {},
    shortdesc: {},
  }
  const domain = ['application', '=', true]
  const result = await orm.call('ir.module.module', 'web_search_read', [[domain], specification])

  console.debug('📡 fetchApps', result)

  dataSet.value = result.records
}
/*
{
    "id": 397,
    "icon": "/sale_management/static/description/icon.png",
    "icon_flag": "",
    "to_buy": false,
    "name": "sale_management",
    "state": "installed",
    "website": "https://www.odoo.com/app/sales",
    "application": true,
    "module_type": "official",
    "shortdesc": "Sales"
}
*/
const dataSet = ref([])

const designStore = useDesignSettingStore()
const globSetting = useGlobSetting()

const { title } = globSetting

onMounted(() => {
  reloadData();
})

 
</script>

<style scoped lang="less"></style>
