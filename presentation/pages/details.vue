<template>
  <div class="container py-10">
    <div class="back-button">
      <button class="shadow-lg py-2 px-6 bg-white rounded-lg">Back</button>
    </div>
    <div class="details-conatiner mt-14 grid laptop:grid-cols-2 laptop:gap-10 tablet:grid-cols-2 tablet:gap-4 grid-cols-1 gap-2">
      <div class="flag w-full" :style="{ height: '500px' }">
        <img
          src="../../assets/images/germany.png"
          alt=""
          class="w-full h-full"
        />
      </div>
      <div class="w-full h-100 flex flex-col justify-center">
        <h1 class="text-xl font-extrabold">Berlin</h1>
        <div class="grid grid-cols-2 gap-x-10 mt-8">
          <p class="mt-1">
            <span class="text-light-mood-text text-md">Native Name: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Population: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Population: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Region: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Sub Region: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Capital: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Top Level Domain: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Countries: </span>
            <span class="text-sm">ljncflr</span>
          </p>
          <p class="mt-2">
            <span class="text-light-mood-text text-md">Langueges: </span>
            <span class="text-sm">ljncflr</span>
          </p>
        </div>
        <div class="flex mt-6 items-center flex-wrap w-full">
          <p>Border Countries:</p>
          <div class="shadow-md py-1 px-4 bg-white rounded mx-2">Back</div>
        </div>
      </div>
    </div>
  </div>
</template>
