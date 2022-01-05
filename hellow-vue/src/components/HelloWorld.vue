<template>
  <div id="bind-attribute">
    <span v-bind:title="message">
      鼠标悬几秒钟查看此处动态绑定的提示信息！
    </span>
    <div
      v-for="(todo, index) in todos"
      :key="index"
      @click="reverseMessage()"
    >
      {{ todo.text }}{{ index }}
    </div>
    <Home />
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
  <span>{{message}}</span>
</template> 

<script >
import Home from "../components/Home.vue";

export default {
  name: "HelloWorld",
  components: {
    Home,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 0,
      see: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
      message: "Hellow Vue",
    };
  },
  mounted() {},
  methods: {
    // reverseMessage: (e) => {
  
    // },
    reverseMessage(){
    console.log(this.see);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
