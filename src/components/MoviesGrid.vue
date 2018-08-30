<template >
    <main  v-bind:class="{ animated: moviesState.selectedMovie }">
        <div>
        <Movie
          ref="movie"
          v-for="(movie, index) in moviesState.movies"
          :key="index"
          :movie="movie"
          />
        <router-link to="/form">Go to Form</router-link>
        </div>
        <MovieDetails class="half-size"
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
  },
  sockets:{
    'insert-movie': function(movie){
      this.moviesState.movies.push(movie)
    },
    'update-movie': function(movie){
      const oldMovie = this.moviesState.movies.find(tabMovie => {
        return tabMovie.id === movie.id
    })
      Object.assign(oldMovie, movie)
    },
    'delete-movie': function(movie){
      const selectedMovie = this.moviesState.movies.find(tabMovie => {
        return tabMovie.id === movie.id
    })
      this.moviesState.movies.splice(this.moviesState.movies.indexOf(selectedMovie), 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
main {
  display: flex;
  width: 200vw;

}
div{
  display: flex;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}
.half-size{
  width: 100vw;
}
.focus {
  background-color: chocolate;
}
.link {
  background-color: white;
  height: 20px;
}
.animated {
    transform: translate3d(-48%, 000px, 0);
    transition: transform 2s;
}
</style>
