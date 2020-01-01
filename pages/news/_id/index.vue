<template>
  <div class="container">
      <div class="row">
          <div class="col-12 col-md-6 offset-md-3 border">
             <div class="text-center"> <h3>{{newsOne[0].newsTitle}}</h3></div> <hr>
             {{newsOne[0].newsDesc}}
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    head:{
    title: 'Haber'
  },
data(){
    return{
        id: this.$route.params.id,
        newsOne:[]
    }
},
computed:{
    ...mapGetters(['getOneNews'])
},

created(){
   this.newsOne= this.$store.getters.getOneNews(this.id);
}
}
</script>

<style>

</style>