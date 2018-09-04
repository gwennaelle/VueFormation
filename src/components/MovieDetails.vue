<template>
    <section >
      <figcaption>{{ moviesState.selectedMovie.title }}</figcaption>
      <figure>
          <img v-bind:class="{ loader: loading }" :src="getImgUrl(moviesState.selectedMovie)" :alt="moviesState.selectedMovie.movieTag"/>
          <div class="metadata">
            <p>{{ moviesState.selectedMovie.synopsis }}</p>
            <span class="update" @click="updateMovie(moviesState.selectedMovie)">Update</span>
            <span class="delete" @click="deleteMovie(moviesState.selectedMovie._id)">Delete</span>
          </div>
      </figure>
      <span @click="closePopup()">Close</span>
    </section>
</template>

<script>
import Loader from './Loader.vue'
import { moviesState } from '../states/movies-state'

export default {
  name: 'MovieDetails',
  components: {
    Loader
  },
  data () {
    return {
      moviesState,
//      movieData: {},
      loading: false
    }
  },
  methods: {
    getImgUrl (movie) {
      return `http://localhost:5000/img/${movie.movieTag}.jpg`
    },
    closePopup () {
      this.moviesState.selectedMovie = null
    },
    async deleteMovie (id) {
      this.loading = true
      try {
        const response = await fetch(`http://localhost:5000/movies/${this.moviesState.selectedMovie._id}`, {
          method: 'delete'
        })
        if (response.ok) {
          this.loading = false
          this.moviesState.movies.splice(this.moviesState.movies.indexOf(this.moviesState.selectedMovie), 1)
          this.moviesState.selectedMovie = null
        } else {
          if (response.status === 400) {
            this.errorMsg = await response.json()
            console.log('res', response.status, this.errorMsg)
          } else {
            this.errorMsg = ['Erreur innatendue']
          }
        }
      } catch (error) {
        this.errorMsg = ['Erreur innatendue']
      }
    },
    updateMovie (movie) {
      this.$router.push('/form/')
    },
    escapeKeyListener (event) {
      console.log(event.keyCode)
      if (event.keyCode === 27) {
        this.closePopup()
      }
    }
  },
  async created () {
    this.loading = true
    document.addEventListener('keydown', this.escapeKeyListener)
    try {
      const id = this.moviesState.selectedMovie._id
      const response = await fetch(`http://localhost:5000/movies/${id}`)
      this.moviesState.selectedMovie = await response.json()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.escapeKeyListener)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import ".././assets/styles/variables.less";

figure {
  display: flex;
  flex-direction: row;
  margin: 15px;
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
  display: flex;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

section {
  position: relative;
  top: 5%;
  margin: 7%;
  background-color: #17181b;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  will-change: transform;
}
p {
  margin: 10px 10px 10px 10px;
  font-size: 1.1em;
}
span {
  background-color: #2b71d8;
  width: 80vw;
  text-align: center;
  font-size: 1.5em;
  margin: 10px;
  padding: 5px;
}
.update {
  background-color: aliceblue;
  color: #17181b;
}
.delete {
  background-color: red;
}
.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #2c3835; /* Blue */
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;
}
.metadata{
  flex-direction: column;
  align-content: center;
  flex-grow: 1;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
