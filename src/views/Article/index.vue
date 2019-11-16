<template>
  <div class="article">
    <el-button size="mini" type="primary" @click="$router.push({name: 'AddArticle'})">
      创建文章
    </el-button>
    <el-table
      :data="articleList"
      border
      size="small"
      :header-cell-style="{'background-color': '#f5fafe'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="createtime"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Article',
  computed: {
    ...mapState({
      articleList: state => state.Article.ArticleList
    })
  },
  mounted() {
    this.fetchArticleList()
  },

  methods: {
    ...mapActions({
      fetchArticleList: 'fetchArticleList'
    }),
    handleEdit(index, row) {
      this.$router.push({ name: 'EditArticle', query: { id: index }})
    },
    handleDelete(index, row) {
      this.$axios.delete(`/Article/Delete/?id=${row._id}`).then((res) => {
        console.log(res)
      })
    }
  }
}

</script>
