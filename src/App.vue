<template>
  <div id="nav">
    <div class="logoimg mb-3">
      <h1>Jean</h1>
    </div>
    <div class="route">
      <div class="rcontent">
        <router-link to="/" class="navbar-brand">首頁</router-link>
        <router-link to="/all" class="navbar-brand">所有商品</router-link>
        <router-link to="/lipstick" class="navbar-brand">唇彩</router-link>
        <router-link to="/finger" class="navbar-brand">指彩</router-link>
        <router-link to="/eyes" class="navbar-brand">眼影</router-link>
        <router-link to="/shop" class="navbar-brand"
          ><i class="fas fa-shopping-cart"></i
        ></router-link>
      </div>
    </div>
  </div>
  <div id="view">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getJSON").then(() => {
      console.log("productList loding success");
    });
  },
  methods: {},
  computed: {
    getStateUser() {
      return this.$store.state.user;
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  padding: 0 50px 50px 50px;
  background: #fff;
  transition: 1s;
}

#nav {
  padding: 30px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  .route {
    width: 80%;
    margin: auto;
    .rcontent {
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid black;
      a {
        font-weight: bold;
        color: #80766e;
        font-size: 16px;
        padding: 10px 0;
        &.router-link-exact-active {
          color: #ec2c64;
        }
      }
    }
  }
}
#view {
  position: relative;
  overflow: hidden;
}
</style>
