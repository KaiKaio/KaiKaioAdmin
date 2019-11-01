<template>
  <div id="aside-bar">
    <div class="logo-font">KaiKaio Admin</div>

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <AsideBarItem v-for="(route, index) in routes" :key="index" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import AsideBarItem from './AsideBarItem'

export default {
  name: 'AsideBar',
  components: {
    AsideBarItem
  },
  data() {
    return {
      routes: [
        { name: '管理文章', path: '/Article' }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
#aside-bar {
  width: 240px;
  height: 100vh;
  position: fixed;
  .logo-font {
    padding: 20px 0px;
    font-size: 18px;
    color: #666;
    text-align: center;
  }
}

</style>
