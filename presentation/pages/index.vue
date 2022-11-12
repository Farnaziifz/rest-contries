<script setup lang="ts">
import ContentLayout from '../layouts/contentLayout.vue'
</script>

<template>
  <content-layout>
    <template #contentTitle>
      <h1>this is title</h1>
    </template>
    <template #contentBody>
      <p class="test1">this is body</p>
    </template>
  </content-layout>
</template>

<style lang="scss">
.test1 {
  color: $primary;
}
</style>
