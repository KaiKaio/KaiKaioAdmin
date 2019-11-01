<template>
  <div class="add_article">
    <el-form ref="postForm" :model="ArticleForm">
      <MDinput v-model="ArticleForm.title" :maxlength="100" name="name" required>
        标题
      </MDinput>
      <el-form-item style="margin-bottom: 40px;" label="简介:">
        <el-input v-model="ArticleForm.description" placeholder="请输入简介" />
      </el-form-item>
      <Tinymce :height="300" v-model="ArticleForm.content" />
    </el-form>

    <el-button style="margin-left: 10px;" type="success" @click="submitForm">
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
      this.$axios.post('https://www.rcment.top/api/Article/Add', {
        title: this.ArticleForm.title,
        description: this.ArticleForm.description,
        content: this.ArticleForm.content
      }).then((res) => {
        console.log(res)
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
