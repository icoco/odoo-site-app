<template>
  <div class="h-screen flex flex-col items-center justify-center p-60px">
    <div class="wel-box w-full flex flex-col items-center justify-between">
      <Logo class="!h-30 !w-30" />
      <div class="text-darkBlue dark:text-garyWhite mb-4 mt-12 text-center text-2xl font-black">
        {{ title }}
      </div>
      <div class="mb-6 mt-4 w-full">
        <van-swipe class="h-30" :autoplay="3000" :indicator-color="designStore.appTheme">
          <van-swipe-item
            v-for="(text, index) in getSwipeText"
            :key="index"
            class="text-center text-gray-700 leading-relaxed dark:text-gray-400"
          >
            <p class="text-lg">
              {{ text.title }}
            </p>
            <p class="text-sm">
              {{ text.details }}
            </p>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// getCurrentInstance获取当前组件实例的上下文信息
import { getCurrentInstance } from 'vue'
// 表示当前组件实例的类型
import type { ComponentInternalInstance } from 'vue'

import { useDesignSettingStore } from '@/store/modules/designSetting'
import { useGlobSetting } from '@/hooks/setting'
import Logo from '@/components/Logo.vue'

import emitBus from '@/utils/mitt'

defineOptions({
  name: 'DashboardPage',
})

// 获取proxy属性 可以访问挂载在全局的实例和方法(需要断言 否则ts报错)
const { proxy } = getCurrentInstance() as ComponentInternalInstance

// emitBus.emit('onWebClientReady', true);
emitBus.on('onWebClientReady', (data) => {
  console.debug('⚡️👂 onWebClientReady', data)
  const webClient = data.message.webClient
  fetchApps(webClient)
})
console.debug(' dashboard start listner ')

function getWebClient() {
  const odoo = globalThis.odoo
  console.debug('⚡️ getWebClient, odoo?', odoo)
  // const __WOWL_DEBUG__ = Object.values(odoo)[0];
  const handler = odoo.__WOWL_DEBUG__
  // odoo.__WOWL_DEBUG__.root.orm
  console.debug('⚡️ __WOWL_DEBUG__?', handler)
  return handler
  return handler.root
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
  const tabItems = await orm.call('ir.module.module', 'web_search_read', [[], specification])

  console.debug('📡 fetchApps', tabItems)
}

const designStore = useDesignSettingStore()
const globSetting = useGlobSetting()

const { title } = globSetting

const getSwipeText = computed(() => {
  return [
    {
      title: '💡 最新技术栈',
      details: '基于Vue3、Vant4、Vite、TypeScript、UnoCSS等最新技术栈开发',
    },
    {
      title: '✨ 零配置 ESlint',
      details: '使用 Git Hook 进行 Lint Commit，规范化提交',
    },
    {
      title: '🌠 使用最新的 <script setup> 语法',
      details: 'Vue 3.4+ 最新语法',
    },
    {
      title: '⚡️ 轻量快速的热重载',
      details: '无论应用程序大小如何，都始终极快的模块热重载（HMR）',
    },
    {
      title: '🔩 主题配置',
      details: '具备主题配置及黑暗主题适配，且持久化保存',
    },
    {
      title: '🛠️ 丰富的 Vite 插件',
      details: '集成大部分 Vite 插件，无需繁琐配置，开箱即用',
    },
    {
      title: '📊 内置 useEcharts hooks',
      details: '满足大部分图表展示，只需要写你的 Options',
    },
    {
      title: '🥳 完善的登录系统、路由、Axios配置',
      details: '所有基础设施已搭建完毕，你可以直接开发你的业务需求',
    },
  ]
})
</script>

<style scoped lang="less"></style>
