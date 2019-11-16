<template>
  <div>
    <router-link :to="{ path: item.path }">
      <el-menu-item>
        {{ item.name }}
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AsideBarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="scss" scope>
a {
  text-decoration: none;
}
</style>
