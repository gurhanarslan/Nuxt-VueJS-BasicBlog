import axios from 'axios'
const state ={
    news:[]
}
const getters = {
    getNews(state){
        console.log('worked')
        return state.news;
    },
    getOneNews(state){
        return key => state.news.filter(response=>{
           return response.id==key
        })
    }
}
const mutations = {
pushNews(state,payload){
    console.log(payload)
    state.news.push(payload)
    console.log('state')
    console.log(state.news)
}    
}
const actions = {
    nuxtServerInit(VueContext,context){
      return  axios.get('https://vue-blog-bae64.firebaseio.com/news.json')
        .then(response =>{
            let data = response.data
            for(let key in data){
                console.log(key)
                data[key].id = key;
             VueContext.commit('pushNews',data[key])
            }
        })
    },
   saveNews(VueContext,payload){
       axios.post('https://vue-blog-bae64.firebaseio.com/news.json',payload)
       .then(response=>{
           payload.id=response.data.name
           console.log(payload)
       })
   } 
}

export default {
    state,
    mutations,
    getters,
    actions
}