<template>
  <div class="container">
      <div class="row">
          <div class="col-12">
                        <div  v-if="$router.currentRoute.path!='/'" class="text-center bg-danger text-white">''<span class="text-info">{{id}}</span>'' Sayfasını Bulamadık! Ana Sayfaya Yönlendirdik!</div>

          </div>
          <app-news v-for="item in getNews" :news="item"></app-news>
      </div>
  </div>
</template>

<script>
import news from '~/components/news'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            id:"",
            text:""
        }
    },
    components:{
        appNews:news
    },
    computed:{
        ...mapGetters(['getNews'])
    },
    created(){     
       let deneme= this.$router.currentRoute.path.split('')
        deneme.shift();
        this.id= deneme.join('')

/*   
        ANA SAYFAYA PUSHLAMAK İSTERSEK - -  -     
     setTimeout(()=>{
           if(this.$router.currentRoute.path!='/'){
               this.$router.push('/')
           } 
        },2000)*/
        
 }
}
</script>

<style>

</style>