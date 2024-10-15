<template>
  <div ref="jsSdk" v-html="getSdk" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import emitBus from '../utils/mitt'
import { useUserStore } from '@/store/modules/user'

// emitBus.emit('onLogin', true);
emitBus.on('onLogin', (e) => {
  console.debug('⚡️ onLogin', e, this)
  renderSdkTemplate(getSdk.value)
  setupSdk()
  boardcastClientReady()
})

function boardcastClientReady() {
  // emitBus.emit('onWebClientReady', true);
}

// --------- js --------
const jsSdk = ref<HTMLDivElement | null>(null)

const userStore = useUserStore()
const getSdk = computed(() => {
  return userStore.getSdk
})

const getToken = computed(() => userStore.getToken)

onMounted(() => {
  setupSdk()
  boardcastClientReady()
})

function renderSdkTemplate(scriptsTags) {
  const elt = jsSdk.value
  if (!elt) {
    return
  }
  elt.innerHTML = ''
  elt.insertAdjacentHTML('afterbegin', scriptsTags)
}

function setupSdk() {
  console.debug('🚀 try setupSdk', getSdk, window)

  if (!jsSdk.value) {
    return false
  }
  const list = jsSdk.value.children
  return makeRunJsNodes(list)
}

function makeRunJsNodes(list) {
  let container = document.getElementById('myOdoo')
  if (!container) {
    container = document.body
  }
  let result = false
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    const script = document.createElement('script')
    script.type = 'text/javascript'
    if (element.innerText) {
      script.text = element.innerText
    }
    if (element.src) {
      script.src = element.src
    }
    container.appendChild(script)
    result = true
  }
  return result
}
</script>

<style scoped lang="less"></style>
