<template>
    <main v-bind:class="{ focus: isFocused }" >
        <Movie
          ref="movie"
          v-for="(movie, index) in moviesState.movies"
          :key="index"
          :movie="movie"
          />
        <MovieDetails
          v-if="moviesState.selectedMovie"
          />
    </main>
</template>

<script>
import Loader from './Loader.vue'
import Movie from './Movie.vue'
import MovieDetails from './MovieDetails.vue'
import { moviesState } from '../states/movies-state'

export default {
  name: 'MoviesGrid',
  components: {
    Movie,
    MovieDetails,
    Loader
  },
  data () {
    return {
      moviesState,
      isFocused: false
    }
  },
  methods: {
    setfocus () {
      this.isFocused = true
    },
    unsetfocus () {
      this.isFocused = false
    }
  },
  async created () {
    try {
      const response = await fetch('http://localhost:5000/filteredMovies')
      const movies = await response.json()
      this.moviesState.movies = movies
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
main {
  flex-grow: 1;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.focus {
  background-color: chocolate;
}
</style>
