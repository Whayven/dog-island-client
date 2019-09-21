<template>
  <div id="app">
    <Navigation />
    <div class="wrapper">
      <router-view/>
      <footer style="text-align: center">
      <small>
        Copyright&copy;
        <i>Foster</i>
      </small>
    </footer>
    </div>
    
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');
html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
}

#app {
  margin-left: auto;
  margin-right: auto;
  font-family: 'Raleway', sans-serif;
  width: 100%;
}

.wrapper {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.title {
  background-color: rgba(230, 226, 223, 0.329);
  text-align: center;
  line-height: 150%;
  margin-bottom: 0;
  border-radius: 2px;

}
</style>
