<template>
  <div
    class="tab-item"
    @click="itemclick"
  >
    <div v-if="!isactive">
      <slot name="tab-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-img-active"></slot>
    </div>
    <div :style="activestyle">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isactive: true
    };
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activestyle() {
      return this.isactive ? { color: this.activecolor } : {};
    }
  },
  methods: {
    itemclick() {
      console.log("点击");
      this.$router.replace(this.path);
    }
  }
};
</script>
<style>
.tab-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
  color: #666666;
}
.tab-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>