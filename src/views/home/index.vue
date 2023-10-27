<template>
  <a-layout class="layout">
    <a-layout-header class="w-100p df jc-ct" theme="light">
      <div class="w-1200 df">
        <div class="logo">logo</div>
        <a-menu @select="changeselect" v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal"
          :style="{ lineHeight: '64px' }">
          <a-menu-item key="back">主页</a-menu-item>
          <a-menu-item key="backset">设置</a-menu-item>
        </a-menu>
        <div class="fl-1"></div>
        <div>登录状态</div>
      </div>
    </a-layout-header>




    <a-layout-content class="w-100p df jc-ct">
      <div class="h-m-c bg-f w-1200">
        <router-view />
      </div>
    </a-layout-content>



    <a-layout-footer class="tac">
      这是一条美丽的山路
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const selectedKeys = ref([]);
onBeforeMount(() => {
  selectedKeys.value[0] = router.currentRoute.value.name
})

const changeselect = () => {
  router.push({
    name: selectedKeys.value[0]
  })
}
</script>





<style scoped></style>