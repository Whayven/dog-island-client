<template>
  <div class="container">
    <h2>Register</h2>
    <div v-if="response" class="alert">
      {{ response }}
    </div>
    <form v-on:submit.prevent="register(user)" class="register-form">
      <span>
        Name:
        <input type="text" name="name" v-model="user.name"  />
        <br />
      </span>
      <span>
        Email:
        <input type="text" name="email" v-model="user.email" />
        <br />
      </span>
      <span>
        Password:
        <input type="password" name="password" v-model="user.password" />
        <br />
      </span>
      <span>
        Confirm Password:
        <input type="password" name="password2" v-model="user.password2" />
        <br />
      </span>
      <input class="submit" type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from '../router';

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(["register"])
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

.register-form input {
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
  background: linear-gradient(rgb(231, 228, 228), #cacaca);
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