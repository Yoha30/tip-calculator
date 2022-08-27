<template>
  <div class="bg-white rounded-xl shadow p-8 px-6 md:px-4 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between">
      <div class=" w-11/12 md:w-1/2">
        <div class="w-full relative">
          <h2 class="text-dark-cyan font-bold">Bill</h2>
          <input v-model="bill" type="number"
                 class="appearance-none w-full md:w-11/12 text-dark-cyan my-2 h-9 bg-light-grey outline-none rounded p-4 font-bold text-lg"
                 dir="rtl" min="0">
          <img src="src/assets/icon-dollar.svg" class="absolute bottom-[18px] left-3">
        </div>
        <div class="my-4 w-full md:w-11/12">
          <h2 class="text-dark-cyan font-bold">Select Tip %</h2>
          <div class="flex justify-between  flex-wrap my-3">
            <div @click="selectCategory(5)" :class="{'active-state': first}" class="percantage-card">
              <p class="percantage-text">{{ five }}</p>
            </div>
            <div @click="selectCategory(10)" :class="{'active-state': second}" class="percantage-card">
              <p class="percantage-text">{{ ten }}</p>
            </div>
            <div @click="selectCategory(15)" :class="{'active-state': third}" class="percantage-card">
              <p class="percantage-text">{{ fifteen }}</p>
            </div>
            <div @click="selectCategory(25)" :class="{'active-state': fourth}" class="percantage-card">
              <p class="percantage-text">{{ twentyFive }}</p>
            </div>
            <div @click="selectCategory(50)" :class="{'active-state': fifth}" class="percantage-card">
              <p class="percantage-text">{{ fifty }}</p>
            </div>
            <div class="custom-card">
              <p class="custom-text">Custom</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 relative">
          <div class="flex place-items-center justify-between">
            <h2 class="text-dark-cyan font-bold">Number of People</h2>
            <h3 class="font-bold text-red-600" v-if="this.people === 0">Can't be zero</h3>
          </div>
          <input @change="calculate" v-model="people" type="number"
                 class="appearance-none w-full md:w-full text-dark-cyan text-lg my-2 h-9 bg-light-grey outline-none rounded p-4 font-bold"
                 dir="rtl" min="0">
          <img src="src/assets/icon-person.svg" class="absolute bottom-[18px] left-3">
        </div>
      </div>
      <Calculation :total="total" :tip="tip"/>
    </div>
  </div>
</template>

<script>

import Calculation from "./calculation.vue";

export default {
  name: "amount",
  components: {Calculation},
  data() {
    return {
      five: '5%',
      ten: '10%',
      fifteen: '15%',
      twentyFive: '25%',
      fifty: '50%',
      custom: 'Custom',
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      bill: '',
      people: null,
      tip: '',
      total: '',
    }
  },

  methods: {
    calculate() {
      // your code goes here
      console.log(this.people)
      if (this.first) {
        this.tip = (this.bill * (5 / 100)) / this.people;
        this.total = ((this.bill / this.people) + this.tip);
      } else if (this.second) {
        this.tip = (this.bill * (10 / 100)) / this.people;
        this.total = ((this.bill / this.people) + this.tip);
      } else if (this.third) {
        this.tip = (this.bill * (15 / 100)) / this.people;
        this.total = ((this.bill / this.people) + this.tip);
      } else if (this.fourth) {
        this.tip = (this.bill * (25 / 100)) / this.people;
        this.total = ((this.bill / this.people) + this.tip);
      } else if (this.fifth) {
        this.tip = (this.bill * (50 / 100)) / this.people;
        this.total = ((this.bill / this.people) + this.tip);
      }
    },
    selectCategory(num) {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
      switch (num) {
        case 5:
          this.first = true;
          if (this.people > 0) {
            this.tip = (this.bill * (5 / 100)) / this.people;
          }
          break;
        case 10:
          this.second = true;
          if (this.people > 0) {
            this.tip = (this.bill * (10 / 100)) / this.people;
          }
          break;
        case 15:
          this.third = true;
          if (this.people > 0) {

            this.tip = (this.bill * (15 / 100)) / this.people;
          }
          break;
        case 25 :
          this.fourth = true;
          if (this.people > 0) {

            this.tip = (this.bill * (25 / 100)) / this.people;
          }
          break;
        case 50 :
          this.fifth = true;
          if (this.people > 0) {

            this.tip = (this.bill * (50 / 100)) / this.people;
          }
          break;
      }
      if (this.people > 0) {
        this.total = ((this.bill / this.people) + this.tip)
      }
    }
  }
}

</script>

<style scoped>

</style>