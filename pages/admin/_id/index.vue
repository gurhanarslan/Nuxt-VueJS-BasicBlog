<template>
  <div>

      <app-news-post :newsOne="item" v-for="item in newsOne"></app-news-post>
  </div>
</template>

<script>
import newpost from "~/components/admin/news-post";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsOne: []
    };
  },
  components: {
    appNewsPost: newpost
  },
  created() {
    this.newsOne = this.$store.getters.getOneNews(this.id);
  }
};
</script>

<style>
</style>