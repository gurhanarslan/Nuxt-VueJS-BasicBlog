<template>
  <div class="container">
      <div class="row">
          <app-news v-for="item in getNews" :news="item"></app-news>
      </div>
  </div>
</template>

<script>
import news from '~/components/news'
import { mapGetters } from 'vuex'
export default {
    components:{
        appNews:news
    },
    computed:{
        ...mapGetters(['getNews'])
    },
}
</script>

<style>

</style>