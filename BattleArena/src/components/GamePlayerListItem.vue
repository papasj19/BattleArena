<script>
export default {
  props: {
    imagePath: Number,
    name: String,
    health: String
  }
}
</script>

<template>
  <section
      class="flex flex-row sm:flex-col justify-around items-center h-full rounded-lg bg-white dark:bg-gray-900 m-2 w-screen sm:w-fit">
    <section class="p-2 flex-1">
      <h2 class="text-center">{{name}}</h2>
      <img :src="imagePath" class="object-cover h-14 w-14 sm:h-24 sm:w-24 mx-auto" alt=""/>
      <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
             style="width: {{parseInt(health)}} %"> {{health}}
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>

</style>