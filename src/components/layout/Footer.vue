<template>
  <footer class="bg-red-500">
    <div class="flex flex-row p-5 ">
      <div class="basis-1/3 pb-5">
        <h1 class="text-white text-xl  mb-4">info</h1>
        <div class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, atque, consectetur cum cumque debitis
          deserunt earum impedit in laboriosam minima minus molestiae quaerat quis similique tempore temporibus tenetur,
          unde voluptas.
        </div>
      </div>
      <div class="basis-1/3 pb-5">
        <h1 class="text-white text-xl mb-4">Contact</h1>
        <div class="text-gray-300">
          <ul>
            <li>
                fdfsdfs
            </li>
          </ul>
        </div>
      </div>
      <div class="basis-1/3 pb-5">
        <h1 class="text-white text-xl  mb-4">Links</h1>
        <div class="text-gray-300">
          <ul>
            <li class="uppercase">
              <router-link to="/" class="uppercase hover:font-semibold hover:text-white">home</router-link>
            </li>
            <li class="uppercase" v-for="link in links" :key="link">
              <router-link :to="'/'+ link" class="uppercase hover:font-semibold  hover:text-white">{{ link }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
      <a href="#">
        <font-awesome-icon :icon="['fab', 'facebook']"
                           class="text-white transition duration-700 ease-in-out  hover:animate-bounce" size="lg"/>
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fab', 'linkedin']"
                           class="text-white transition duration-700 ease-in-out  hover:animate-bounce" size="lg"/>
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fab', 'twitter']"
                           class="text-white transition duration-700 ease-in-out  hover:animate-bounce" size="lg"/>
      </a>
    </div>
    <div class="text-center p-5 sm:pt-12 font-light flex items-center justify-between text-gray-400  bg-red-600 ">
      <div>
        <span class="text-gray-400">
          © {{ date }} - All Rights Reserved.
        </span>
      </div>
      <div>
        <span class="text-gray-400"> Created by Jack Dev </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: 0,
      links: [
        'about',
        'services',
        'portfolio',
        'contact'
      ]
    }
  },
  mounted() {
    this.date = new Date().getFullYear();
  }
}
</script>

<style scoped>

</style>
