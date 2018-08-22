<template>
    <figure v-bind:class="{ focus: isFocused }">
        <img :src="getImgUrl(movie)" :alt="movie.movieTag" @click="selectMovie()"/>
        <figcaption>{{ movie.title }}</figcaption>
    </figure>
</template>
<script>
import { moviesState } from '../states/movies-state'

export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  data () {
    return {
      moviesState,
      isFocused: false
    }
  },
  methods: {
    getImgUrl (movie) {
      return `http://localhost:5000/img/${movie.movieTag}.jpg`
    },
    selectMovie () {
      this.moviesState.selectedMovie = this.movie
    },
    setfocus () {
      this.isFocused = true
    },
    unsetfocus () {
      this.isFocused = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '.././assets/styles/variables.less';

figure {
  width: 230px;
  font-size: 1em;
  font-weight: bold;
  margin: 10px;
}
img {
  max-width: 100%;
  border: 3px solid black;
  border-radius: 5%;
  box-shadow: 0 0 10px black;
  transition: transform 2s;
  &:hover {
    border: 3px solid @blue;
    transform: scale(1.1, 1.1);
  }
}
figcaption {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5em;
  white-space: nowrap;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.focus{
  background-color: chartreuse !important;
}
</style>
