<template>
  <div>Detail Player {{ player.name }}</div>
</template>

<script>
import footBallApi from '../apis/footballApi'

export default {
  name: 'DetailPlayer',
  data () {
    return {
      player: {}
    }
  },
  methods: {
    async fetchDetailsPlayer () {
      const detailsPlayer = await footBallApi.get(`/players/${this.$route.params.id}`)
      console.log(detailsPlayer.data)
      this.player = detailsPlayer.data
    }
  },
  created () {
    this.fetchDetailsPlayer()
  }
}
</script>

<style>

</style>
