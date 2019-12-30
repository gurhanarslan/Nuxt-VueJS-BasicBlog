<template>
  <div>
    <app-header :isAdmin="true"></app-header>
    <nuxt />
    <app-footer :isAdmin="true"></app-footer>
  </div>
</template>

<script>
import header from '../components/shared/header'
import footer from '../components/shared/footer'
export default {
  components:{
    appHeader:header,
    appFooter:footer
  }
};

</script>

<style>
body{
  font-family: sans-serif
}
</style>

