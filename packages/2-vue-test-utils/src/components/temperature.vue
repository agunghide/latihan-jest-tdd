<template>
  <div>
    <span>{{ celcius }} deg. Celsius</span>
    <span>{{ fahrenheit }} deg. Fahrenheit</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    temp: {
      type: [String, Number] as PropType<string|number>,
      default: 0,
    },
  },
  data() {
    return {
      type: 'celcius',
      degrees: 0,
    }
  },
  computed: {
    celcius(): number {
      return this.type == 'celcius'
        ? this.degrees
        : parseInt(`${(this.degrees - 32) * 0.556}`)
    },
    fahrenheit(): number {
      if (this.type == 'fahrenheit')
        return this.degrees
      else
        return (this.degrees * 1.8) + 32
    }
  },
  watch: {
    temp: {
      immediate: true,
      handler: function(val)  {
        if (!val) return
        this.degrees = parseInt(val)
        this.type = String(val).endsWith('f') ? 'fahrenheit' : 'celcius'
      }
    },
  }
})
</script>

