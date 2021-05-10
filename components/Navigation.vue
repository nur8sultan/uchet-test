<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">
        <img src="@/assets/img/doge.png" alt="doge">
        To-Do
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link active" aria-current="page" href="#">Active</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/done" class="nav-link active" aria-current="page" href="#">Done</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/deleted" class="nav-link active" aria-current="page" href="#">Deleted</nuxt-link>
          </li>
        </ul>
        <auth />
      </div>
    </div>
  </nav>
</template>

<script>
import Auth from "./Auth";

export default {
  name: "Navigation",
  components: {
    Auth,
  },
}
</script>


<style>
img {
  max-height: 50px;
}
</style>
