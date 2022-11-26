<script setup lang="ts">
import CountryCard from '@/presentation/components/Specific/CountryCard.vue'
</script>

<template>
  <div class="container py-10">
    <div class="search-bar">dewcwe</div>
    <div class="card-container mt-8 grid grid-cols-4 gap-4">
      <CountryCard
        :cardData="{
          name: 'germany',
          Population: '234423423',
          region: 'res',
          Capital: 'Berlin',
        }"
      />
    </div>
  </div>
</template>

<style lang="scss">
.test1 {
  color: $primary;
}
</style>
