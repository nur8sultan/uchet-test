<template>
  <div class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {{ authorized ? user && user.name : 'Auth' }}
    </a>
    <div class="dropdown-menu">
      <div v-show="!authorized" class="login" aria-labelledby="navbarDropdown">
        <input v-model="form.name" type="text" placeholder="Name">
        <input v-model="form.password" type="password" placeholder="Password">
        <div class="justify-content-center">
          <button
            class="btn btn-primary mt-2 mb-2"
            @click="login"
          >
            Sign in
          </button>
          <button
            class="btn btn-success mt-2 mb-2"
            @click=""
          >
            Sign up
          </button>
        </div>
      </div>
      <div v-show="authorized" class="login" aria-labelledby="navbarDropdown">
        <button
          class="btn btn-danger mt-2 mb-2"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Auth",
  data() {
    return {
      form: {},
    }
  },
  computed: {
    ...mapState({
      authorized: state => state.authorized,
      user: state => state.user,
    })
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.form);
      this.form = {};
    },
    signup() {
      this.$store.dispatch('signup', this.form);
      this.form = {};
    },
    logout() {
      this.$store.commit('setUser', {});
      this.$store.commit('setAuthorized', false);
      this.form = {};
    },
  },
}
</script>
