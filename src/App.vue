<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Test</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  // 가로 스크롤 없앤다
  overflow-x: hidden;
}

#app {
  min-width: 500px;
  width: 100%;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
