<script setup lang="ts">
import CountryCard from '@/presentation/components/Specific/CountryCard.vue'
import BaseInput from '@/presentation/components/shared/BaseInput.vue'
import { getCountryList } from '~~/logics/specific/country.handler'
import { ref, onBeforeMount, Ref } from 'vue'
import { countryList } from '@/core/types/country'
const search = (value: string) => {
  console.log(value)
}

const data: Ref<countryList> = ref([])

onBeforeMount(async () => {
  data.value = await getCountryList()
  console.log(typeof data.value)
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
          name: item.name,
          Population: item.population,
          region: item.region,
          Capital: item.capital,
          flag: item.flag,
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
