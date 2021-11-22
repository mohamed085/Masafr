<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  created() {
    this.$store.dispatch('tryLogin');
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
  direction: rtl;
  text-align: right;
}
</style>
