<template>
  <div class="grid grid-cols-1 grid-flow-row auto-rows-auto bg-white">
    <div class="row-start-1 row-end-1">
      <Header/>
    </div>
    <div class="row-start-2 row-end-2">
      <Main/>
    </div>
    <div class="row-start-3 row-end-3">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Main from "../components/layout/Main.vue";
import Footer from "../components/layout/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style scoped>

</style>
