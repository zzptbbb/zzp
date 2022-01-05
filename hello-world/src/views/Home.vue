<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <div @click="change(), change1()">按钮</div>
  <div>{{ calculateBooksMessage() }}</div>
  <div v-if="Math.random() > 0.5">Now you see me</div>
  <div v-else>Now you don't</div>
  <ul>
    <li v-for="(value, name) in myObject" :key="value">
      {{ name }}------------{{ value }}
    </li>
  </ul>
  <ul v-for="numbers in sets" :key="numbers">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>
  <div>
    <el-radio v-model="radio1" label="1">Option 1</el-radio>
    <el-radio v-model="radio1" label="2">Option 2</el-radio>
  </div> <el-button type="danger">Danger</el-button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import {defineComponent, ref } from "vue";
@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // publishedBooksMessage() {
    //   return this.author.books.length > 0 ? "Yes" : "No";
    // },
  },
  methods: {
    calculateBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    change() {
      console.log("111");
    },
    change1() {
      console.log("11122222");
    },
    
  },
  setup() {
      return {
        radio1: ref("1"),
        radio2: ref("1"),
        radio3: ref("1"),
        radio4: ref("1"),
      };
    },
})

export default class Home extends Vue {}

</script>
