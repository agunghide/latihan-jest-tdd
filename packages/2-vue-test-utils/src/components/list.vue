<template>
  <div>
    <ul>
      <ListItem
        :key="index"
        v-for="(groupName, index) in musicGroups"
        :name="groupName"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListItem from './list-item.vue'

export default Vue.extend({
  components: {
    ListItem
  },
  data() {
    return {
      musicGroups: [
        'Jungle',
        'King Lizard',
        'Tame Impala',
      ]
    }
  }
})
</script>