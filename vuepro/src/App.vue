<template>
<div>
  <NavBar />
  <div>
    <router-view/>
  </div>
  <Footer />
</div>
</template>

<script lang="ts">
import NavBar from '@/components/layout/NavBar.vue';
import Footer from '@/components/layout/FooterWeb.vue';

export default({
  components: {
    NavBar, Footer
  },
})
</script>

<style>
@import "~bulma/css/bulma.css";
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav a {
  /* font-weight: bold; */
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color:#e66f0f;
}
</style>
