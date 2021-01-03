<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
// import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: []
    };
  },
  components: {
    NavBar
  }
  // created() {
  //   getHomeMultidata().then(res => {
  //     this.banners = res.data.banners.list;
  //   });
  // }
};
</script>
<style scoped>
.nav-bar {
  background: #ff9700;
  color: #fff;
  font-size: 14px;
}
</style>