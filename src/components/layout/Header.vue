<template>
  <header>
    <div class="container p-5 ">
      <div class="relative">
        <nav class="flex justify-between items-center fixed top-0 left-0 right-0 p-5">
          <div class="image">
            Arquitectura
          </div>
          <div class="links">
            <ul class="menu flex items-center justify-center space-x-6">
              <li >
                <router-link to="/" class="text-red-500 hover:text-red-500 uppercase font-semibold">home</router-link>
              </li>
              <li v-for="link in links" :key="link">
                <router-link :to="'/'+ link" class="text-gray-400 hover:text-red-500 uppercase">{{ link }}</router-link>
              </li>
            </ul>
          </div>
          <div class="theme">
            <button class="rounded-lg bg-red-500 p-2 hover:bg-red-500 text-white ">
              <font-awesome-icon v-if="true" :icon="['fa', 'moon']"  size="lg" class="transition duration-700 ease-in-out  hover:-rotate-45" />
              <font-awesome-icon v-if="false" :icon="['fa', 'sun']"  size="lg" class="transition duration-700 ease-in-out hover:-rotate-45" />
            </button>
          </div>
        </nav>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        'about',
        'services',
        'portfolio',
        'contact'
      ]
    }
  },
}
</script>

<style scoped>

</style>
