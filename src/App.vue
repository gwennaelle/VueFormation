<template>
  <div id="app">
    <AppHeader ref="header"/>
    <MoviesGrid ref="movieGrid"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import MoviesGrid from './components/MoviesGrid.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    MoviesGrid
  },
  data () {
    return {
      isFocused: false
    }
  },
  methods: {
    arrowKeysListener (event) {
      console.log(event.keyCode)
      if (event.keyCode === 40) {
        this.$refs.header.unsetfocus()
        this.$refs.movieGrid.setfocus()
        console.log(this.$refs.movieGrid.isFocused)
        if (this.$refs.movieGrid.isFocused){
          this.$refs.movieGrid.unsetfocus()
          this.$refs.movieGrid.$refs.movie[0].setfocus()
        }
      }
    }
  },
  mounted () {
    this.$refs.header.setfocus()
    document.addEventListener('keydown', this.arrowKeysListener)
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
