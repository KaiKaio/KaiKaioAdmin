<template>
  <div id="nav-bar">
    NavBar
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}

</script>

<style lang="scss" scoped>
#nav-bar {
  height: 50px;
  width: calc(100% - 240px);
  position: fixed;
  left: 240px;
  z-index: 1;
  background: #8d8d8d;
}

</style>
