import API from "./api"

const categoryService = {
  getArticlesLatest(){
    return API.call().get('/wp/v2/posts', {
      params: {
        per_page: 3,
        page: 1,
        lang: 'vi'
      }
    })
  },

  
}

export default categoryService;