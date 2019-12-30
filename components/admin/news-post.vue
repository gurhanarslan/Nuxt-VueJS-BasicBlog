<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 col-md-6 border">
        <div class="form-group">
          <legend>Haber Başlığı</legend>
          <input v-model="news.newsTitle" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <legend>Haber Yazarı</legend>
          <input v-model="news.newsAuthor" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <legend>Haber Etiketleri</legend>
          <input v-model="news.newsTags" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <legend>Haber Küçük Açıklama</legend>
          <textarea v-model="news.newsMiniDesc" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <legend>Haber Açıklaması</legend>
          <textarea v-model="news.newsDesc" cols="30" rows="10" class="form-control"></textarea>
        </div>
          <div class="form-group text-right mt-4">
              <button @click="saveNews" class="btn btn-sm btn-outline-success">New Post</button>
        </div>
      </div>
      <div class="col-12 col-md-6 border">
        <strong>Haber Başlığı :</strong>
        {{news.newsTitle}}
        <hr />
        <strong>Küçük Açıklama :</strong>
        {{news.newsMiniDesc}}
        <hr />
        <strong>Açıklama :</strong>
        {{news.newsDesc}}
            <hr />
        <strong>Yazar :</strong>
        {{news.newsAuthor}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        newsTitle: null,
        newsAuthor: null,
        newsMiniDesc: "",
        newsTags: null,
        newsDesc: "",
        newsDate: null,
        newsLike: 0,
        NewsComment: 0,
        NewsReadingTime: null
      }
    };
  },
  methods: {
    saveNews() {
      //date purchase
      let date = new Date();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let year = date.getFullYear();
      let DateNow = day + "/" + month + "/" + year;
      this.news.newsDate = DateNow;
      //reading time purchase
      let minReadingTime = 1000;
      let time = Math.ceil(this.news.newsDesc.length / minReadingTime);
      this.news.NewsReadingTime = time;
      console.log(this.news)
      this.$store.dispatch("saveNews", this.news);
    }
  }
};
</script>

<style>
</style>