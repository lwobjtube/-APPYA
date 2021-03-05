<template>
  <div id="app">
<!--    
    <Test /> -->

    <div class="bj">
      <router-link to='/'>home</router-link>|
      <router-link to='/login'>login</router-link>|
      <router-link to='/minsse'>minsse</router-link>
         <router-link to='/Test'>Test</router-link>
    </div>

     <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Test from "./components/Test";
// export default {
//   name: "App",
//   components: {
//     // HelloWorld,
//     Test,
//     home,
//   },
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    padding: 30px;
}
.bj{

  margin: 30px;
}
</style>
