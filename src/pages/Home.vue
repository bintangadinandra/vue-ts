<template>
  <div>
    <h1>Camel Homepage</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})

export default class Home extends Vue {
  message: string

  constructor () {
    super()
    this.message = 'Hello!'
  }
}
</script>
