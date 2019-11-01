<template>
  <div class="article">
    <el-button size="mini" type="primary" @click="$router.push({name: 'AddArticle'})">
      创建文章
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Article',
  mounted() {
    this.$axios.get('https://www.rcment.top/api/Article').then((res) => {
      console.log(res, 'res')
    })
  }
}

</script>
