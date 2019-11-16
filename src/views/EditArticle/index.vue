<template>
  <div class="add_article">
    <el-form ref="postForm" :model="ArticleForm">
      <MDinput v-model="ArticleForm.title" :maxlength="100" name="name" required>
        标题
      </MDinput>
      <el-form-item style="margin-bottom: 40px;" label="简介:">
        <el-input v-model="ArticleForm.description" placeholder="请输入简介" />
      </el-form-item>
      <Tinymce v-model="ArticleForm.content" :height="300" />
    </el-form>
    <el-button style="margin-top: 20px;" type="primary" @click="submitForm">
      提交文章
    </el-button>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MDinput from '@/components/MDinput'

import { mapState } from 'vuex'

export default {
  name: 'EdirArticle',
  components: { Tinymce, MDinput },
  data() {
    return {
      ArticleForm: {
        title: '',
        content: '',
        description: ''
      }
    }
  },
  computed: {
    ...mapState({
      articleList: state => state.Article.ArticleList
    })
  },
  mounted() {
    this.ArticleForm.title = this.articleList[this.$route.query.id].title
    this.ArticleForm.content = this.articleList[this.$route.query.id].content
    this.ArticleForm.description = this.articleList[this.$route.query.id].description
  },
  methods: {
    submitForm() {
      this.$axios.put('/Article/Edit/', {
        id: this.articleList[this.$route.query.id]._id,
        content: this.ArticleForm.content,
        title: this.ArticleForm.title,
        description: this.ArticleForm.description
      }).then((res) => {
        console.log(res)
      })
    }
  }
}

</script>

<style lang="scss">
.add_article {
  .material-input__component {
    margin-bottom: 20px;
  }
}
</style>
