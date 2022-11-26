<script lang="ts" setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['onChange'])

const getValue = (e: any) => {
  emits('onChange', e.target.value)
}
</script>

<template>
  <div class="w-full bg-white shadow-md py-4 px-6 rounded">
    <span class="mr-4">icon</span>
    <input
      type="text"
      placeholder="Search for country..."
      class="focus:outline-none"
      @input="getValue"
    />
  </div>
</template>
