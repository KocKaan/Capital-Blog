import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card 1",
        blogCoverPhoto: "stock-1",
        blogDate: "August 1, 2021",
      },
      {
        blogTitle: "Blog Card 2",
        blogCoverPhoto: "stock-2",
        blogDate: "August 2, 2021",
      },
      {
        blogTitle: "Blog Card 3",
        blogCoverPhoto: "stock-3",
        blogDate: "August 3, 2021",
      },
      {
        blogTitle: "Blog Card 4",
        blogCoverPhoto: "stock-4",
        blogDate: "August 4, 2021",
      },
    ], 
    editPost: null,


  },
  mutations: {
    toggleEditPost(state,payload){
      state.editPost=payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
