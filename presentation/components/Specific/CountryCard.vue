<script lang="ts" setup>
const props = defineProps({
  cardData: {
    type: Object,
  },
})
</script>

<template>
  <div class="w-full shadow-md bg-white rounded-lg h-96 cursor-pointer">
    <div class="img-container w-full rounded-t-lg">
      <img
        src="@/assets/images/germany.png"
        alt=""
        class="w-full rounded-t-lg"
      />
    </div>
    <div class="info-container mt-2 p-5">
      <div class="text-lg font-extrabold">{{ props.cardData?.name }}</div>
      <p class="mt-4">
        <span class="text-light-mood-text text-md">Population: </span>
        <span class="text-sm">{{ props.cardData?.Population }}</span>
      </p>
      <p class="mt-1">
        <span class="text-light-mood-text text-md">Region: </span>
        <span class="text-sm">{{ props.cardData?.region }}</span>
      </p>
      <p class="mt-1">
        <span class="text-light-mood-text text-md">Capital: </span>
        <span class="text-sm">{{ props.cardData?.Capital }}</span>
      </p>
    </div>
  </div>
</template>
