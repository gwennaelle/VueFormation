<template>
  <div>
    <section>
      <figcaption>{{ movie.title }}</figcaption>
      <figure>
          <img :src="getImgUrl(movie)" :alt="movie.movieTag"/>
          <p>{{ movie.synopsis }}</p>
      </figure>
      <span @click="selectMovie()">Close</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: {
    movie: Object,
    selectMovie: Function
  },
  data () {
    return {
      selectedMovie: null
    }
  },
  methods: {
    getImgUrl (movie) {
      return `/img/${movie.movieTag}.jpg`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '.././assets/styles/variables.less';

figure{
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
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5em;
  white-space: nowrap;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
div{
    position: fixed;
    top :0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
}

section{
    margin: 7%;
    width: 60%;
    background-color: #17181b;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

p{
    margin: 10px;
    font-size: 1.1em;

}
span{
    background-color: #2b71d8;
    width: 100%;
    text-align: center;
    font-size: 1.5em;
}
</style>
