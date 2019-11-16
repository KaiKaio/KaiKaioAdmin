<template>
  <div id="nav-bar">
    <div class="discription">一代人终将老去，但也总有人正年轻</div>
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
  color: #8d8d8d;
  border-bottom: 1px solid #ccc;
  .discription {
    margin-left: 4px;
    margin-top: 4px;
  }
}

</style>
