<template>
  <div id="app">
    <a
      href="/mycommits"
      class="logo"
      draggable="false"
      ondragstart="return false"
    >
      <img src="./assets/inspectocat.png" alt="logo" />
    </a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  background-color: #f9f9f9;
}

#app {
  font-family: "Inter var experimental", "Inter var", Inter, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34495e;
  margin-top: 20px;
}

.logo {
  width: 140px;
}
</style>
