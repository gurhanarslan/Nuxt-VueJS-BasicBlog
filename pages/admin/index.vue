<template>
<div>
    <div v-if="getNews.length==0" class="text-center">Loading..</div>
         <app-news :isAdmin="true" v-for="item in getNews" :news="item"></app-news>
</div>
     
</template>

<script>
import news from '~/components/news'
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            newsl:[]
        }
    },
    components:{
        appNews:news
    },
    computed:{
        ...mapGetters(['getNews'])
    }
}
</script>

<style>

</style>