<template>
  <div class="login">
    <input v-validate="'required|phone'" name="phone">
    <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
    <h1>{{ testValue }}</h1>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      testValue: '变化前'
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tap() {
      console.log("tap!");
    },
    singleTap() {
      console.log("long tap！");
    },
    pressMove: function(evt) {
      console.log(evt.deltaX);
      console.log(evt.deltaY);
      console.log("onPressMove");
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    setTimeout(function() {
      this.testValue = '变化后'
    }, 2000);
    console.log("登录页");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>