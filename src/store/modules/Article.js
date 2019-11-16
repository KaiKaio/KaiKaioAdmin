
import axios from 'axios'
import apiConfig from '../../config/api.config'

axios.defaults.baseURL = apiConfig.baseUrl

const state = () => {
  return {
    ArticleList: []
  }
}

const mutations = {
  // 文章列表
  updateArticleList(state, data) {
    state.ArticleList = data
  }
}

const actions = {
  fetchArticleList({ commit }) {
    axios.get('/Article/').then((res) => {
      commit('updateArticleList', res.data.data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
