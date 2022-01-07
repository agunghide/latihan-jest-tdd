<template>
  <div style="text-align: left; width: 640px;">
    <header style="display: flex; justify-content: space-between;">
      <form class="form">
        <label for="username">
          <input
            id="username"
            type="text"
          >
        </label>
        <button type="button">
          Add
        </button>
      </form>
      <button type="button">
        Clear All
      </button>
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
import Vue from 'vue'
export default Vue.extend({
  components: {
    GithubUserListItem: () => import('./github-user-list-item.vue')
  }
})
</script>
