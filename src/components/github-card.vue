<template>
  <div>
    <form @submit.prevent="fetchData">
      <input type="text" v-model="username">
      <button type="submit">Load Details...</button>
    </form>

    <template v-if="data">
      <div class="card">
        <img :src="data.avatar_url" :alt="data.name">
        <h2>{{ data.name }}</h2>
        <h4>{{ data.bio }} -- {{ data.location }}</h4>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      username: '',
      data: undefined,
      url: '',
    };
  },

  methods: {
    composeUrl(username: string): string {
      return `https://api.github.com/users/${username}`
    },

    async fetchData(): Promise<void> {
      this.url = this.composeUrl(this.username)
      const response = await fetch(this.url);
      this.data = await response.json();
    }
  }
})
</script>
