<script setup lang="ts">
type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
  // const colorMode = useColorMode()
  console.log(newTheme)
  // colorMode.preference = newTheme
}
</script>

<template>
  <div class="bg-white py-4 shadow-md dark:bg-dark-mood-elm">
    <div class="container flex items-center justify-between">
      <h1 class="text-lg font-extrabold">Where In The World?</h1>
      <p
        class="text-base text-light-mood-text"
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
      >
        Dark Mood
      </p>
    </div>
  </div>
</template>
