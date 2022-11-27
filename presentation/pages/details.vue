<script lang="ts" setup>
import { getSingleCountry } from '../../logics/specific/country.handler'
import { ref, Ref, onBeforeMount } from 'vue'
import { countryList } from '../../core/types/country'
import { useRoute } from 'vue-router'

const cName = useRoute().params.name as string
const data: Ref<countryList> = ref([])

onBeforeMount(async () => {
  data.value = await getSingleCountry(cName)
  console.log(data.value)
})
</script>

<template>
  <div class="container py-10">
    <div class="back-button">
      <button class="shadow-lg py-2 px-6 bg-white rounded-lg">Back</button>
    </div>
    <div
      class="details-conatiner mt-14 grid laptop:grid-cols-2 laptop:gap-10 tablet:grid-cols-2 tablet:gap-4 grid-cols-1 gap-2"
      v-if="data && data.length"
    >
      <div class="flag w-full" :style="{ height: '500px' }">
        <img
          :src="data[0].flag"
          alt=""
          class="w-full h-full"
        />
      </div>
      <div class="w-full h-100 flex flex-col justify-center">
        <h1 class="text-xl font-extrabold">{{ data[0].name }}</h1>
        <div class="grid grid-cols-2 gap-x-10 mt-8">
          <p class="mt-1">
            <span class="text-light-mood-text text-md">Native Name: </span>
            <span class="text-sm">{{ data[0].nativeName }}</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Population: </span>
            <span class="text-sm">{{ data[0].population }}</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Region: </span>
            <span class="text-sm">{{ data[0].region }}</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Sub Region: </span>
            <span class="text-sm">{{ data[0].subregion }}</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Capital: </span>
            <span class="text-sm">{{ data[0].capital }}</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Top Level Domain: </span>
            <span
              class="text-sm"
              v-for="(dm, index) in data[0].topLevelDomain"
              :key="dm"
              >{{ dm }} <span v-if="index + 1 !== data[0].topLevelDomain.length">,</span></span
            >
          </p>

          <p class="mt-2" v-if="data[0].languages.length">
            <span class="text-light-mood-text text-md">Langueges: </span>
            <span
              class="text-sm"
              v-for="(lang, index) in data[0].languages"
              :key="lang.name"
              >{{ lang.name }}
              <span v-if="index + 1 !== data[0].languages.length">
                ,
              </span></span
            >
          </p>
        </div>
        <div
          class="flex mt-6 items-center flex-wrap w-full"
          v-if="data[0].borders && data[0].borders.length"
        >
          <p>Border Countries:</p>
          <div
            class="shadow-md py-1 px-4 bg-white rounded mx-2"
            :key="item"
            v-for="item in data[0].borders"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
