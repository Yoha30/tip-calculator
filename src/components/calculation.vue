<template>
  <div class="bg-dark-cyan p-8 px-6 md:px-4 lg:px-8 w-full mt-8 md:mt-0 md:w-1/2 rounded-lg">
    <div class="flex place-items-center justify-between">
      <div>
        <p class="text-white text-base md:text-sm lg:text-lg">Tip Amount</p>
        <p class="text-light-cyan opacity-50">/ person</p>
      </div>
      <p class="text-strong-cyan font-bold text-3xl md:text-2xl lg:text-5xl" v-if="!tip">$ {{ test }}</p>
      <p class="text-strong-cyan font-bold text-3xl md:text-2xl lg:text-5xl" v-if="tip">$ {{ tip }}</p>
    </div>
    <div class="flex place-items-center justify-between mt-12">
      <div>
        <p class="text-white text-base md:text-sm lg:text-lg">Total</p>
        <p class="text-light-cyan opacity-50">/ person</p>
      </div>
      <p class="text-strong-cyan font-bold text-3xl md:text-2xl lg:text-5xl" v-if="!total">$ {{ test }}</p>
      <p class="text-strong-cyan font-bold text-3xl md:text-2xl lg:text-5xl" v-if="total">$ {{ total }}</p></div>
  </div>
</template>

<script>

export default {
  name: "calculation",
  props: ['tip', 'total'],
  data() {
    return {
      test: '0.00',
    }
  },

}
</script>

<style scoped>

</style>