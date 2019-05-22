<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="father">
      <div class="children">
        <h4>测试</h4>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  methods: {
    test() {
      console.log('tap！')
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  .father {
    border: 1px solid skyblue;
    // @include clearfix;
    h4 {
      font-size: 30px;
    }
  }
}
</style>

