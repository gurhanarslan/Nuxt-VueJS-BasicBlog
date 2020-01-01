<template>
  <div class="col-12 col-md-12 mt-5">
    <div class="card  border-info border">
      <div class="card-header bg-info text-white">
        {{news.newsTitle}}
                <nuxt-link tag="button" :to="'/admin/'+news.id" v-if="isAdmin" class="btn btn-outline-light btn-sm">Edit</nuxt-link>
        <button @click="putLike" :disabled="liked==true" v-if="!isAdmin" class="btn btn-outline-light ml-5  btn-sm">{{like}}</button>
      </div>
      <nuxt-link tag="a" class="nav-link text-secondary" :to="'/news/'+news.id">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{news.newsMiniDesc}}</p>
            <footer class="text-right blockquote-footer">
              {{news.NewsReadingTime}} dakikalık okuma {{news.newsDate}} {{news.newsLike}} Beğeni {{news.NewsComment}} Yorum
              <cite
                title="Source Title"
              >{{news.newsAuthor}}</cite>
            </footer>
          </blockquote>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  
  props: {
    news: {
      required: false
    },
    isAdmin: {
      required: false,
      default: false
    }
  },
  data(){
    return{
      like:"Beğen",
      liked:false
    }
  },
  methods:{
    putLike(){
     this.news.newsLike++;
      this.like="Beğendin"
      this.liked=true
      this.$store.dispatch('putLike',{id:this.news.id, newsLike:this.news.newsLike})
    }
  },
  created(){
    this.liked=false
  }
  
};
</script>

<style>
</style>