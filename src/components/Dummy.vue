<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class Dummy extends Vue {
  message: string = 'Hi Wonderful!';
}
</script>

<style scoped>
</style>
