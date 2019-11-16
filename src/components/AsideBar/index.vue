<template>
  <div id="aside-bar">
    <div class="logo">
      <svg class="icon logo-icon" aria-hidden="true">
        <use xlink:href="#icon-cat" />
      </svg>
      <span class="logo-font">KaiKaio</span>
    </div>

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
  border-right: 1px solid #ccc;
  .logo {
    text-align: center;
    padding: 20px 0px;
    .logo-font {
    font-size: 20px;
    color: #666;
    }
    .logo-icon {
      width: 36px;
      height: 36px;
    }
  }
  .el-menu {
    border-right: 0px;
  }
}

</style>
