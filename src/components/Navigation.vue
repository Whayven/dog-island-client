<template>
  <div>
    <header>
      <div class="banner-container">
        <nav class="nav" :class="{responsive: this.isActive}">
          <div class="nav-container" @click="drawer()">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/popular">Popular</router-link>
            <router-link v-if="!user._id" class="link" to="/login">Login</router-link>
            <button v-else class="link" @click="logout">Logout</button>
            <router-link v-if="user._id" class="link" to="/profile">My Profile</router-link>
          </div>

          <a href="javascript:void(0);" class="icon" @click="drawer()">
            <i class="fa fa-bars"></i>
          </a>
        </nav>
        <h1 class="banner">Dog Island</h1>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navigation",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    ...mapActions(["fetchUser", "logout"]),
    drawer() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  async created() {
    await this.fetchUser().catch(e => {});
  }
};
</script>

<style scoped>
.banner-container .banner {
  font-size: 3em;
  color: #e5ded6;
  text-shadow: 2px 2px 3px #000;
  margin: 0 0 0.1em 0.2em;
  position: absolute;
  bottom: 0;
}

.banner-container {
  background: url("../assets/whitelakedog.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 20vh;
  width: 100%;
  position: relative;
}

.banner-container .nav {
  display: flex;
  padding: 1em;
}

.banner-container .link {
  background: transparent;
  margin-right: 1.5em;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  color: #e5ded6;
  border: none;
  cursor: pointer;
}

.link {
  text-decoration: none;
  font-size: 1.1em;
  color: black;
  padding: 0;
}
.link:hover {
  color: rgb(255, 217, 0);
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.nav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .nav .link {
    display: none;
  }
  .nav .icon {
    display: block;
  }

  .link:hover {
    color: rgb(255, 217, 0);
    transform: none;
    transition: none;
  }

  .banner-container .nav {
    display: block;
  }

  .nav.responsive {
    position: relative;
  }
  .nav.responsive .icon {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1.1em;
  }

  .nav.responsive .link {
    float: none;
    display: block;
    text-align: left;
    margin-top: 1.1em;
    padding: 0.3em;
  }

  .nav .nav-container {
    background: black;
    z-index: 1;
    position: relative;
    width: 30vw;
  }
}
</style>
