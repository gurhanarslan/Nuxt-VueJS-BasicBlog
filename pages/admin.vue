<template>
 
          <nuxt-child></nuxt-child>
</template>

<script>
import news from '~/components/news'
export default {
    layout:'admin',
    components:{
        appNews:news
    }
}
</script>

<style>

</style>