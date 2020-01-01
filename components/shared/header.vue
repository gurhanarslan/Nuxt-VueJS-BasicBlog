<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a href="/" class="navbar-brand p-white">
        <span v-if="isAdmin">Blog Admin</span>
        <span v-if="!isAdmin">Blog</span>
      </a>
      <div class="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
        <div class="navbar-toggler-icon"></div>
      </div>
      <div class="collapse navbar-collapse text-center" id="navbarmenu">
        <div class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link
              v-if="!isAdmin"
              tag="a"
              exact
              active-class="border-bottom actived text-info border-light"
              to="/"
              class="nav-link"
            >HOME</nuxt-link>
            <nuxt-link
              v-if="isAdmin"
              tag="a"
              exact
              active-class="border-bottom actived text-info border-light"
              to="/admin"
              class="nav-link"
            >ADMIN HOME</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              v-if="isAdmin"
              tag="a"
              active-class="border-bottom text-info actived border-light"
              to="/admin/news-post"
              class="nav-link"
            >NEW POST</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              v-if="isAdmin"
              tag="a"
              exact
              active-class="border-bottom actived text-info border-light"
              to="/"
              class="nav-link"
            >HOME</nuxt-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style>
.actived {
  animation: 2s active;
}
@keyframes active {
  from {
    opacity: 0;
    color: #17c2b3;
  }
  to {
    opacity: 1;
    color: #17a2b8;
  }
}
</style>