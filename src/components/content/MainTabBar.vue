<template>
  <tab-bar>
    <tab-bar-item
      path="/home"
      activecolor="#ff9700"
    >
      <img
        slot="tab-img"
        src="~assets/img/tabar/home.png"
        alt=""
      >
      <img
        slot="tab-img-active"
        src="~assets/img/tabar/home_active.png"
        alt=""
      >
      <div slot="tab-text">
        首页
      </div>
    </tab-bar-item>
    <tab-bar-item
      path="/fujin"
      activecolor="#ff9700"
    >
      <img
        slot="tab-img"
        src="~assets/img/tabar/fujin.png"
        alt=""
      >
      <img
        slot="tab-img-active"
        src="~assets/img/tabar/fujin_active.png"
        alt=""
      >
      <div slot="tab-text">
        附近
      </div>
    </tab-bar-item>
    <tab-bar-item
      path="/shop"
      activecolor="#ff9700"
    >
      <img
        slot="tab-img"
        src="~assets/img/tabar/shop.png"
        alt=""
      >
      <img
        slot="tab-img-active"
        src="~assets/img/tabar/shop_active.png"
        alt=""
      >
      <div slot="tab-text">
        购物车
      </div>
    </tab-bar-item>
    <tab-bar-item
      path="/my"
      activecolor="#ff9700"
    >
      <img
        slot="tab-img"
        src="~assets/img/tabar/my.png"
        alt=""
      >
      <img
        slot="tab-img-active"
        src="~assets/img/tabar/my_active.png"
        alt=""
      >
      <div slot="tab-text">
        我的
      </div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/tab-bar";
import TabBarItem from "components/common/tabbar/tabbar-item";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>