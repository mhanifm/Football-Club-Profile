<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import footBallApi from '../apis/footballApi'

export default {
  name: 'About',
  data () {
    return {
      areas: []
    }
  },
  methods: {
    async fetchFootBallAreas () {
      try {
        const footBallAreas = await footBallApi.get('/players/6985')
        console.log(footBallAreas.data)
        this.areas = footBallAreas.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    this.fetchFootBallAreas()
  }
}
</script>
