<template>
  <header>
    <h1>Movies</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
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
</style>
