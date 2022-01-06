<template>
  <div class="home" style="display: flex; justify-content: center;">
    <GithubUserList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {
    GithubUserList: () => import('@/components/exercise/github-user-list.vue') 
  }
});
</script>
