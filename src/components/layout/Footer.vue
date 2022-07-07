<template>
  <footer class="bg-red-500 container">
    <div class="container">
      <div class="container p-12">
        <div class="flex flex-row py-6">
          <div class="basis-1/3 pb-5">
            <h1 class="text-white text-xl  mb-4">Logo</h1>
            <div class="text-slate-200">logo
            </div>
          </div>
          <div class="basis-1/3 pb-5">
            <h1 class="text-white text-xl mb-4">Contact</h1>
            <div class="text-slate-200">
              <p>Mail: info@mysite.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
          </div>
          <div class="basis-1/3 pb-5">
            <h1 class="text-white text-xl  mb-4">Address</h1>
            <div class="text-slate-200">
              <p>500 Terry Francois Stree</p>
              <p>San Francisco, CA 94158</p>
            </div>
          </div>
        </div>
        <div class="flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between pt-6">
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
      </div>
      <div class="container p-12 bg-red-600 ">
        <div class="text-center font-light ">
          <div>
              <small class="text-slate-300">
                © {{ date }} - All Rights Reserved. Created by <a href="https://jack-dev.surge.sh/" target="_blank">Jack Dev</a>
              </small>
          </div>
        </div>
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
