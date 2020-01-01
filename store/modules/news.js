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
},
editedNews(state,payload){
    let postIndex = state.news.findIndex(post=>{
        return post.id==payload.id
    })
    
    if(postIndex){
        state.news[postIndex]=payload
    }
}    
}
const actions = {
    nuxtServerInit(VueContext,context){
      return  axios.get(process.env.baseUrl+'news.json')
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
       axios.post(process.env.baseUrl+'news.json',payload)
       .then(response=>{
           payload.id=response.data.name
           console.log('saveNews')
           VueContext.commit('pushNews',payload)
           console.log(payload)
       })
   },
   putEdit(VueContext,payload){
  axios.put(process.env.baseUrl+'news/'+payload.id+'.json',payload)
  .then(response=>{
    VueContext.commit('editedNews',payload)    
  })
   },
   putLike(VueContext,payload){
    axios.put(process.env.baseUrl+'news/'+payload.id+'/newsLike.json',payload.newsLike)
    .then(response=>{
        console.log(response)
    })

   }

}

export default {
    state,
    mutations,
    getters,
    actions
}