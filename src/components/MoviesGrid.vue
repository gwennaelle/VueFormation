<template>
    <main>
        <Movie
          v-for="(movie, index) in movies"
          :key="index"
          :movie="movie"
          :selectMovie="selectMovie"/>
        <MovieDetails
          v-if="selectedMovie"
          :movie="selectedMovie"
          :close-popup="closePopup"/>
    </main>
</template>

<script>
import Movie from './Movie.vue'
import MovieDetails from './MovieDetails.vue'

export default {
  name: 'MoviesGrid',
  components: {
    Movie,
    MovieDetails
  },
  data () {
    return {
      movies: null,
      selectedMovie: null
    }
  },
  async created () {
    try {
      let response = await fetch('data/movies.json')
      this.movies = await response.json()
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    selectMovie (movie) {
      this.selectedMovie = movie
    },
    closePopup () {
      this.selectedMovie = null
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

</style>
