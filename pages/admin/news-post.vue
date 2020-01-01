<template>
  <div> 
    <app-news-post :newsOne="news"></app-news-post>
  </div>
</template>

<script>
import newpost from '~/components/admin/news-post'
export default {
  data(){
    return{
      news:[]
    }
  },
components:{
  appNewsPost:newpost
}
}
</script>

<style>

</style>