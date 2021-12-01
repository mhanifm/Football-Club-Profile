<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-5">
        <img :src="details.crestUrl" style="width: auto; height: 300px" alt="">
      </div>
      <div class="col-7">
        <h2 class="mt-2 mb-5 text-center">{{ details.name }}</h2>
        <div class="row">
          <div class="col-4">
            <h5>Venue</h5>
            <h5>Founded</h5>
            <h5>Club Colors</h5>
            <h5>Address</h5>
            <h5>Website</h5>
            <h5>Phone</h5>
            <h5>Email</h5>
          </div>
          <div class="col-8">
            <h5>: {{ details.venue }}</h5>
            <h5>: {{ details.founded }}</h5>
            <h5>: {{ details.clubColors }}</h5>
            <h5>: {{ details.address }}</h5>
            <h5>: <a :href="details.website">{{ details.website }}</a></h5>
            <h5>: {{ details.phone }}</h5>
            <h5>: {{ details.email }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h3>List Players</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.id">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.role}}</td>
            <td>
              <div>
                <router-link
                  :to="{ name: 'DetailPlayer', params:{ id: player.id }}"
                  class="btn btn-sm btn-outline-info"
                >Details</router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import footBallApi from '../apis/footballApi'

export default {
  name: 'DetailsTeam',
  data () {
    return {
      details: {},
      players: []
    }
  },
  methods: {
    async fetchDetailsTeam () {
      const detailsTeam = await footBallApi.get(`/teams/${this.$route.params.id}`)
      console.log(detailsTeam.data)
      this.details = detailsTeam.data
      this.players = detailsTeam.data.squad
    }
  },
  created () {
    this.fetchDetailsTeam()
  }
}
</script>

<style>

</style>
