<template>
  <div class="text-center body">
    <main class="form-signin">
    <b-form @submit.prevent="login">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <img class="mb-4" src="../assets/img/logo.jpeg" alt="" width="92" height="77">
        <h1 class="h3 mb-3 text-success fw-normal">الرجاء تسجيل الدخول</h1>
      </div>

      <div v-if="error" class="text-danger d-flex align-items-center justify-content-center pt-4 pb-4">
        {{ error }}
      </div>

      <div v-if="!spinner" class="form-floating">
        <input type="email" v-model="user.email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label class="text-success" for="floatingInput">عنوان البريد الإلكتروني</label>
      </div>
      <div v-if="!spinner" class="form-floating">
        <input type="password" v-model="user.password" class="form-control" id="floatingPassword" placeholder="Password">
        <label class="text-success" for="floatingPassword">كلمه السر</label>
      </div>

      <button v-if="!spinner" class="w-100 btn btn-lg btn-success" type="submit"> تسجيل الدخول</button>

      <div v-if="spinner" class="text-center">
        <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
      </div>

    </b-form>
  </main>
  </div>
</template>

<script>

import router from "../router";
import store from "../store";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      spinner: false,
      error: '',
    }
  },
  methods: {
    async login() {
      this.spinner = true;

      try {
        await this.$store.dispatch('login', {
          user: this.user
        })
        await router.push('/')
      } catch (e) {
        this.error = e.message || 'Failed to authenticate.';
      }

      this.spinner = false;
    }
  },
  created() {
    if (store.getters.isAuthenticated) {
      router.push('/')
    }
  },
}
</script>

<style scoped>
@import url("../assets/css/bootstrap.rtl.min.css");

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.body {
  height: 100vh;
  width: 100%;
}

.body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>