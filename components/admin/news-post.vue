<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 m-0 p-0 text-center mb-4"><div class="text-center bg-danger text-white p-1 rounded" v-if="newsOne.length!=0"><h4>Haber Düzenle</h4></div>
        <div class="text-center bg-success text-white p-1 rounded" v-if="newsOne.length==0"><h4>Yeni Haber Yükle</h4></div>
</div> 
      <div class="col-12  border shadow mx-md-4" :class="previsionClass()">
        <div class="form-group" >
        <strong >Haber Başlığı</strong>
          <input v-model="news.newsTitle" type="text" :class="{ 'outline-shadow-red': newsOne.length!=0, 'outline-shadow-green' : newsOne.length==0}" class="form-control" />
        </div>
        <div class="form-group ">
          <legend>Haber Yazarı</legend>
          <input v-model="news.newsAuthor" type="text" :class="{ 'outline-shadow-red': newsOne.length!=0, 'outline-shadow-green' : newsOne.length==0}" class="form-control"/>
        </div>
        <div class="form-group">
          <legend>Haber Etiketleri</legend>
          <input v-model="news.newsTags" type="text" :class="{ 'outline-shadow-red': newsOne.length!=0, 'outline-shadow-green' : newsOne.length==0}" class="form-control" />
        </div>
        <div class="form-group">
          <legend>Haber Küçük Açıklama</legend>
          <textarea v-model="news.newsMiniDesc" :class="{ 'outline-shadow-red': newsOne.length!=0, 'outline-shadow-green' : newsOne.length==0}" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <legend>Haber Açıklaması</legend>
          <textarea v-model="news.newsDesc" :class="{ 'outline-shadow-red': newsOne.length!=0, 'outline-shadow-green' : newsOne.length==0}" cols="30" rows="10" class="form-control"></textarea>
        </div>
          <div class="form-group text-right mt-4">
              <button v-if="newsOne.length==0" @click="saveNews" class="btn btn-sm btn-outline-success">New Post</button> 
                <button v-if="newsOne.length!=0" @click="updateNews" class="btn btn-sm btn-outline-danger">Update News Post</button>
        </div>
      </div>
          <transition enter-active-class="animated fadeInRight" leave-active-class="animated delay-2s fadeOutBigRight">
      <div v-if="prevision()" class="col-12 col-md-5 border shadow mx-md-2" :class="{ 'shadow-red': newsOne.length!=0, 'shadow-green' : newsOne.length==0}" >
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
           <hr />
        <strong>Etiketler :</strong>
        {{news.newsTags}}
     
      </div>
          </transition>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    newsOne:{
      required:false
    }
  },

  data() {
    return {
      news: {
        newsTitle: "",
        newsAuthor: "",
        newsMiniDesc: "",
        newsTags: null,
        newsDesc: "",
        newsDate: null,
        newsLike: 0,
        NewsComment: 0,
        NewsReadingTime: null
      },

    };
  },
  methods: {
    previsionClass(){
     if(this.news.newsTitle.length!=0 || this.news.newsAuthor.length!=0 || this.news.newsTags.length!=0 || this.news.newsMiniDesc.length!=0 || this.news.newsDesc.length!=0){
       
          return 'col-md-6 slow'
       }
       else{
         return 'col-md-12 slow'
       }
       if(this.newsOne.length!=0){
         return 'shadow-red'
       }
       else{
         return 'shadow-green'
       }
    },
    prevision(){
      if(this.news.newsTitle.length!=0 || this.news.newsAuthor.length!=0 || this.news.newsTags.length!=0 || this.news.newsMiniDesc.length!=0 || this.news.newsDesc.length!=0){
        return true
      }
    },

    saveNews() {
     this.purchase()
      console.log(this.news)
      this.$store.dispatch("saveNews", this.news);
    },
    updateNews(){
     this.purchase()
      let edited = this.news
            this.$store.dispatch("putEdit", {...edited,id:this.$route.params.id})
            .then(back=>{
              this.$router.push('/admin')
            });
    },
    purchase(){
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
    }
  },
  created(){
    if(this.newsOne.length!=0){
      this.news=this.newsOne
    }
    else{
      this.news={
        newsTitle: "",
        newsAuthor: "",
        newsMiniDesc: "",
        newsTags: "",
        newsDesc: "",
        newsDate: null,
        newsLike: 0,
        NewsComment: 0,
        NewsReadingTime: null
      }
    }
  }
 
};
</script>

<style>
.shadow-red{
  box-shadow: 1px 2px 2px 1px rgba(255, 0, 0, 0.274) 
}.shadow-green{
  box-shadow: 1px 2px 2px 1px rgba(0, 128, 0, 0.274)
}
.outline-shadow-red:focus{
  box-shadow:0 0 0 .2rem rgba(255, 0, 0, 0.274) !important;
}
.outline-shadow-green:focus{
  box-shadow:0 0 0 .2rem rgba(0, 128, 0, 0.274) !important
}
.slow{
  transition: 0.5s all linear;
}
</style>