<template>
  <footer class="bg-red-500">
    <div class="flex flex-row p-5">
      <div class="basis-1/3 pb-5">
        <h1 class="text-white">info</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, atque, consectetur cum cumque debitis
          deserunt earum impedit in laboriosam minima minus molestiae quaerat quis similique tempore temporibus tenetur,
          unde voluptas.
        </div>
      </div>
      <div class="basis-1/3 pb-5">
        <h1 class="text-white">Contact</h1>
        <div>
          <ul>
            <li>

            </li>
          </ul>
        </div>
      </div>
      <div class="basis-1/3 pb-5">
        <h1 class="text-white">Links</h1>
        <div>
          <ul>
            <li class="uppercase text-white ">
              <router-link to="/" class="text-white uppercase hover:font-semibold">home</router-link>
            </li>
            <li class="uppercase text-white " v-for="link in links" :key="link">
              <router-link :to="'/'+ link" class="text-white uppercase hover:font-semibold ">{{ link }}</router-link>
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
