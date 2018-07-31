<template>
  <div id="app">
    <Header/>
    <MoviesGrid/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MoviesGrid from './components/MoviesGrid.vue'

export default {
  name: 'app',
  components: {
    Header,
    MoviesGrid
  }
}
</script>

<style lang="less">
@import '~normalize.css';
@import './assets/styles/variables.less';

  #app {
    background: @dark-grey;
    font-family: Tahoma;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
