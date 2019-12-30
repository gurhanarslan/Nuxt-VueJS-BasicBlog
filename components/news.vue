<template>
  <div class="col-12 col-md-12">
    <nuxt-link tag="a" :to="'/news/'+news.id">
      <div class="card">
        <div class="card-header">{{news.newsTitle}} --</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{news.newsMiniDesc}}</p>
            <footer class="blockquote-footer">
              {{news.NewsReadingTime}} dakikalık okuma {{news.newsDate}} {{news.newsLike}} Beğeni {{news.NewsComment}} Yorum
              <cite title="Source Title">{{news.newsAuthor}}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["news"]
};
</script>

<style>
</style>