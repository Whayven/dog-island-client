<template>
  <div class="wrapper">
    <h3 class="title">Welcome, {{ user.name }}!</h3>
    <div class="card">
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur architecto quis atque! Consequuntur, accusamus incidunt quibusdam unde quasi porro atque! Voluptate sint unde rem nesciunt libero nobis iure temporibus.</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  methods: mapActions(["fetchUser"]),
  computed: mapGetters(["user"]),
  async mounted() {
    await this.fetchUser();
  }
};
</script>