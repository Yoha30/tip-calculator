<template>
  <div class="bg-white rounded-xl shadow p-8 px-6 md:px-4 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between">
      <div class=" w-11/12 md:w-1/2">
        <div class="w-full relative">
          <h2 class="text-dark-cyan font-bold">Bill</h2>
          <input v-model="bill" type="number"
                 class="appearance-none w-full md:w-11/12 text-dark-cyan my-2 h-9 bg-light-grey outline-none rounded p-4 font-bold text-lg"
                 dir="rtl" min="0">
          <svg class="absolute bottom-[18px] left-3" xmlns="http://www.w3.org/2000/svg" width="11" height="17">
            <path fill="#9EBBBD"
                  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/>
          </svg>
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
          <svg class="absolute bottom-[18px] left-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16">
            <path fill="#9EBBBD"
                  d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/>
          </svg>
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