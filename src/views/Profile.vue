<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.name }}</p>
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