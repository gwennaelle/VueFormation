<template>
    <figure>
        <img :src="getImgUrl(movie)" :alt="movie.movieTag" @click="detailMovie(movie)"/>
        <figcaption>{{ movie.title }}</figcaption>
    </figure>
</template>
<script>
export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  methods: {
    getImgUrl (movie) {
      return `/img/${movie.movieTag}.jpg`
    },
    detailMovie() {
      this.$emit('detailMovie', this.movie)
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
</style>
