<template>
  <div class="flex flex-col items-center justify-center">
    <!-- <div class="enter-y logo mb-8 mt-8">
      <Logo class="!h-30 !w-30" name="logo" />
    </div>
    <div class="enter-y text-darkBlue dark:text-garyWhite mb-12 text-2xl font-black">
      {{ title }}
    </div> -->
    <div class="enter-y logo mb-8 mt-8">
      <div align="center"  >
            <a href="https://github.com/ixkit/odoo-site-app">
              <span style="font-size:50px;">🏪</span>
            </a>
            <br>
            <a href="https://github.com/ixkit/odoo-site-app">
              <img alt="Odoo Site App" width="20%" height="20%" src="/img/odoo_logo.png"/>
            </a>
      </div>
    </div>   
    <div class="enter-y text-darkBlue dark:text-garyWhite mb-12 text-2xl font-black">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import { useGlobSetting } from '@/hooks/setting'

const globSetting = useGlobSetting()

const { title } = globSetting
</script>

<style scoped lang="less"></style>
