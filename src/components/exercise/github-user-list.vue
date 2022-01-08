<template>
  <div style="text-align: left; width: 640px">
    <header style="display: flex; justify-content: space-between">
      <form class="form" @submit.prevent="fetchData">
        <label for="username">
          <input id="username" type="text" v-model="username" />
        </label>
        <button type="submit">Add</button>
      </form>
      <button type="button" role="clear" @click="clearAll">Clear All</button>
    </header>
    <div>
      <GithubUserListItem />
      <GithubUserListItem />
      <GithubUserListItem />
      <GithubUserListItem />
      <GithubUserListItem />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    GithubUserListItem: () => import("./github-user-list-item.vue"),
  },
  data() {
    return {
      username: "",
      users: [] as string[],
      url: "",
    };
  },

  methods: {
    composeUrl(username: string): string {
      return `https://api.github.com/users/${username}`;
    },

    async fetchData(): Promise<void> {
      this.url = this.composeUrl(this.username);
      const response = await fetch(this.url);
      const data = await response.json();
      this.users.push(data);
    },

    clearAll(){
      this.users = []
    }
  },
});
</script>
