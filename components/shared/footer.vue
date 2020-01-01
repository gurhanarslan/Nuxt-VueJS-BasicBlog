 <template>
  <div class="contaier fluid">
      <div class="bg-dark text-white text-center fixed-bottom">
        2019 Gürhan Arslan      <span class="mr-auto"><nuxt-link tag="a" class="text-info " v-if="!isAdmin" to="/admin">Admin Page</nuxt-link></span>   
      </div>
  </div>
</template>

<script>
export default {
  props:{
    isAdmin:{
      type:Boolean,
      required:false,
      default:false
    }
  }
}
</script>

<style>

</style>