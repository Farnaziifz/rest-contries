<script setup lang="ts">
import CountryCard from '@/presentation/components/Specific/CountryCard.vue'
import BaseInput from '@/presentation/components/shared/BaseInput.vue'
import { getCountryList } from '~~/logics/specific/country.handler'
import { ref, onBeforeMount } from 'vue'
const search = (value: string) => {
  console.log(value)
}

const data = ref({
  items: [],
  hasNextPage: false,
  hasPreviousPage: false,
  page: 0,
  totalCount: 0,
  totalPages: 0,
})

onBeforeMount(async () => {
  data.value = await getCountryList()
  console.log(data.value)
})
</script>

<template>
  <div class="container py-10">
    <div class="search-bar w-full flex justify-between items-center">
      <div class="w-[400px]">
        <BaseInput @on-change="search" />
      </div>
    </div>
    <div
      class="card-container mt-8 laptop:grid-cols-4 laptop:gap-8 tablet:grid-cols-3 tablet:gap-6 mobile:grid-cols-2 mobile:gap-4 grid grid-cols-1 gap-2"
    >
      <CountryCard
        v-for="item in data"
        :key="item.population"
        :card-data="{
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
