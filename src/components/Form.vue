<template>
  <section>
  <button><router-link to="/">Retour</router-link></button>
  <h2>Add a movie</h2>
    <form name="myForm" @submit.prevent="displayForm">
  <label for="ftitle">Title: </label><input v-model="title" type="text" id="ftitle"><br/>
  <label for="ftag">Tag: </label><input v-model="movieTag" type="text" id="ftag"><br/>
  <label for="fsynopsis">Synopsis: </label><textarea v-model="synopsis" type="text" id="fsynopsis"></textarea><br/>
  <div v-if="errorMsg != null">
      <p v-for="(err, index) in errorMsg"
          :key="index">{{ errorMsg[index] }}</p>
  </div>
  <input type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
import { moviesState } from '../states/movies-state'

export default {
  name: 'Form',
  data () {
    return {
      moviesState,
      id: null,
      title: null,
      movieTag: null,
      synopsis: null,
      errorMsg: null
    }
  },
  methods: {
    async displayForm (event) {
      console.log(moviesState)
      try {
        const response = await fetch('http://localhost:5000/form', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this._id,
            title: this.title,
            movieTag: this.movieTag,
            synopsis: this.synopsis
          })
        })
        if (response.ok) {
          this.$router.push('/')
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
    }
  },
  created () {
    if (moviesState.selectedMovie !== null) {
      this._id = moviesState.selectedMovie._id
      this.title = moviesState.selectedMovie.title
      this.movieTag = moviesState.selectedMovie.movieTag
      this.synopsis = moviesState.selectedMovie.synopsis
    }
  }
}
</script>

<style scoped lang="less">
section{
    position: relative;
    background-color: #17181b;
    border-radius: 10px;
    will-change: transform;
}
h2{
  text-align: center;
}
form{
  display: flex;
  top: 5%;
  margin: 0% 25%;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.1em;
}
input, textarea {
      border-radius: 4px;
      border: 2px solid #fff;
      padding: 10px;
      &:focus {
        border-color: lightblue;
      }
}
label{
  font-size: 1.1em;
}
.submit{
  width: 100%;
  align-content: center;
  border-radius: 4px;
  font-size: 1.1em;
}
button{
  margin: 20px;
}
div{
  background-color: rgba(255, 0, 0, 0.815);
  margin: 5px 0px 20px 0px;
  border-radius: 4px;
  padding: 10px;
  font-size: 1.05em;

}
</style>
