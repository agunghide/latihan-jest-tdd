<template>
  <div>
    <h1>Fruit Basket</h1>
    <form @submit.prevent="addToBasket">
      <input type="text" v-model="fruit">
      <button type="submit">Add Fruit</button>
    </form>
    <ul class="fruits">
      <li v-for="fruit in basket" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      basket: [] as Array<string>,
      fruit: '' as string,
    }
  },

  methods: {
    addToBasket(): void {
      if (this.fruit.trim().length <= 0) return
      this.basket.push(this.fruit)
      this.fruit = ''
    }
  }
})
</script>
