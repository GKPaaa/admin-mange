<template>
  <a-layout>
    <a-layout-sider width="160" class="h-m-c" style="background: #fff">
      <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <!-- <user-outlined /> -->
              subnav 1
            </span>
          </template>
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>



    <a-layout-content class="bg-f m-010" :style="{ padding: '16px', }">
      Content
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'
const selectedKeys = ref(['1']);
const openKeys = ref(['sub1']);

</script>

<style  scoped></style>