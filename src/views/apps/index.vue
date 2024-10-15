<template>
  <div class="h-screen items-center justify-center">
    <div class="my-card m-25px rounded-2xl p-30px shadow-xl">
      <div class="flex flex-col items-center justify-center p-10px">
        <Logo class="!w-30" />
        <div class="text-darkBlue dark:text-garyWhite text-1xl mb-2 mt-2 text-center font-black">
          {{ title }}
        </div>
        <div class="text-center">
          {{ title }}
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
    "summary": "从报价到发票",
    "website": "https://www.odoo.com/app/sales",
    "application": true,
    "module_type": "official",
    "shortdesc": "销售"
}
*/
const dataSet = ref([])

const designStore = useDesignSettingStore()
const globSetting = useGlobSetting()

const { title } = globSetting

onMounted(() => {
  reloadData();
})

const getSwipeText = computed(() => {
  return [
    {
      title: '💡 最新技术栈',
      details: '基于Vue3、Vant4、Vite、TypeScript、UnoCSS等最新技术栈开发',
    },

  ]
})
</script>

<style scoped lang="less"></style>
