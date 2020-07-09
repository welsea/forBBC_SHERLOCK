<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
 body{
   margin:0px !important;
   background:#f6f6f6;
}
</style>