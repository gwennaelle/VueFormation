<template>
  <section>
  <button><router-link to="/">Retour</router-link></button>
  <h2>Add a movie</h2>
    <form name="myForm" @submit.prevent="displayForm">
  <label for="ftitle">Title: </label><input v-model="title" type="text" id="ftitle"><br/>
  <label for="ftag">Tag: </label><input v-model="tag" type="text" id="ftag"><br/>
  <label for="fsynopsis">Synopsis: </label><textarea v-model="synopsis" type="text" id="fsynopsis"></textarea><br/>
  <input type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      title: null,
      tag: null,
      synopsis: null
    }
  },
  methods: {
   async displayForm (event) {
      await fetch('http://localhost:5000/form', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.title,
          tag: this.tag,
          synopsis: this.synopsis
        })
      })
      this.$router.push('/')
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
  margin: 7%;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
.submit{
  width: 10%;
  align-content: center;
}
button{
  margin: 20px;
}
</style>
