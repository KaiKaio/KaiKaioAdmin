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

export default {
  name: 'AddArticle',
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
  methods: {
    submitForm() {
      console.log(this.postForm)
      this.$axios.post('/Article/Add', {
        title: this.ArticleForm.title,
        description: this.ArticleForm.description,
        content: this.ArticleForm.content
      }).then((res) => {
        this.$message.success('提交成功')
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
