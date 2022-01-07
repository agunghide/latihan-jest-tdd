<template>
  <main>
    <h1>Hello {{ value }}</h1>
  </main>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: String as PropType<string>,
      default: 'Test'
    }
  }
})
</script>
