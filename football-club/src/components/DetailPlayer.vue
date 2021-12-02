<template>
  <div id="detail-player">
    <div class="box container">
      <h2>Information Player</h2><br>
      <div class="row">
        <div class="col-5">
          <h5>Name</h5>
          <h5>Country of Birth</h5>
          <h5>Date of Birth</h5>
          <h5>Nationality</h5>
          <h5>Position</h5>
        </div>
        <div class="col-7">
          <h5>: {{ player.name }}</h5>
          <h5>: {{ player.countryOfBirth }}</h5>
          <h5>: {{ player.dateOfBirth }}</h5>
          <h5>: {{ player.nationality }}</h5>
          <h5>: {{ player.position }}</h5>
        </div>
      </div>
    </div>
  </div>
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
#detail-player {
  padding: 0 80px;
  display: flex;
  justify-content: center;
}
.box {
  position: relative;
  max-width: 100%;
  padding: 50px;
  background: rgba(255, 255, 255, .4);
  box-shadow: 0 5px 15px rgba(0, 0, 0, .7);
}
.box h2 {
  text-align: center;
}
</style>
