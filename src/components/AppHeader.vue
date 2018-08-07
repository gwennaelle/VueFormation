<template>
  <header  v-bind:class="{ focus: isFocused }" >
    <h1>Movies</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  },
  data () {
    return {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
header {
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 2.5em;
  }
}
.focus{
  background-color: aqua;
}
</style>
