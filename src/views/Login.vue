<template>
  <div class="container">
    <h2>Login</h2>
    <div v-if="response" class="alert">
      {{ response }}
    </div>
    <form v-on:submit.prevent="login(user)" class="login-form">
      <span>
        Email:
        <input type="text" name="email" v-model="user.email" />
        <br />
      </span>
      <br />
      <span>
        Password:
        <input type="password" name="password" v-model="user.password" />
        <br />
      </span>
      <input class="submit" type="submit" value="Login" />
    </form>
    <router-link to="/register" class="link">Click here to register</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Login",
  data() {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions(["login"]),
  },
  computed: mapGetters(["response"])
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}

.login-form input {
  width: 100%;
  border-radius: 1px;
  border: 1px solid darkgray;
  height: 2vh;
}
.submit {
  margin-top: 5px;
  border-radius: 3px;
  border: 1px solid rgb(204, 204, 204);
  background: linear-gradient(rgb(255, 255, 255), #dfdbdb);
  font-size: 1em;
}

.submit:hover {
  cursor: pointer;
}

.link {
  color: blue;
  text-align: center;
}

.alert {
  border: 1px solid red;
  border-radius: 3px;
  text-align: center;
  font-weight: 600;
  color: white;
  background: rgba(255, 0, 0, 0.534);
  padding: 0.2em;
  margin-bottom: 0.5em;
}
</style>