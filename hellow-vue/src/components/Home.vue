<template>
  <div>{{ msg }}</div>
  <el-button type="danger">Danger</el-button>
  <div>
    <el-checkbox v-model="checked1" label="Option 1"></el-checkbox>
    <el-checkbox v-model="checked2" label="Option 2"></el-checkbox>
  </div>
  <div>
    <el-checkbox
      v-model="checked3"
      label="Option 1"
      size="medium"
    ></el-checkbox>
    <el-checkbox
      v-model="checked4"
      label="Option 2"
      size="medium"
    ></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked5" label="Option 1" size="small"></el-checkbox>
    <el-checkbox v-model="checked6" label="Option 2" size="small"></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked7" label="Option 1" size="mini"></el-checkbox>
    <el-checkbox v-model="checked8" label="Option 2" size="mini"></el-checkbox>
  </div>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Arbitrary time"
  >
  </el-time-picker>
  <el-time-picker
    v-model="value2"
    arrow-control
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Arbitrary time"
  >
  </el-time-picker>
</template>

<script>
const makeRange = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
export default {
  name: "Home",
  data() {
    return {
      msg: "Home",
      value1: new Date(2015, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    };
  },
  created() {
    for (let i = 0; i < 1000; i++) {
      // console.log(i);
      
      setTimeout(() => {
      var div = document.createElement("div");
      div.innerText = i;
      document.body.appendChild(div);
      }, 3000);
    }
  },
  methods: {
    // 如允许 17:30:00 - 18:30:00
    disabledHours() {
      return makeRange(0, 16).concat(makeRange(19, 23));
    },
    disabledMinutes(hour) {
      if (hour === 17) {
        return makeRange(0, 29);
      }
      if (hour === 18) {
        return makeRange(31, 59);
      }
    },
    disabledSeconds(hour, minute) {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59);
      }
    },
  },
};
</script>

<style>
</style>