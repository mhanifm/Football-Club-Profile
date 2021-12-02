<template>
  <div class="box">
    <div class="mb-5">
      <div class="row mb-5">
        <div class="col-5">
          <img :src="details.crestUrl"
            id="img-club" alt="">
        </div>
        <div class="col-7">
          <h2 class="mt-2 mb-5 text-center fontList">{{ details.name }}</h2>
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
    </div>
    <div class="row justify-content-center">
      <div class="container">
        <h3 class="fontList">List Players {{details.name}}</h3>
      </div>
      <table class="table shadow border border-5">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="fontPlayer">
          <tr v-for="player in details.squad" :key="player.id">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.role}}</td>
            <td>
              <div>
                <router-link
                  :to="{ name: 'DetailPlayer', params:{ id: player.id }}"
                  class="btn btn-sm btn-info"
                ><i class="fas fa-eye mr-2"></i>Details</router-link>
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
      details: {}
    }
  },
  methods: {
    async fetchDetailsTeam () {
      const detailsTeam = await footBallApi.get(`/teams/${this.$route.params.id}`)
      this.details = detailsTeam.data
    }
  },
  created () {
    this.fetchDetailsTeam()
  }
}
</script>

<style>
#img-club {
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  width: 450px;
  height: 300px;
}
.fontList {
  font-size: 30px;
  font-weight: 700;
}
.box {
  position: relative;
  max-width: auto;
  padding: 50px;
  background: rgba(255, 255, 255, .6);
  box-shadow: 0 5px 15px rgba(0, 0, 0, .7);
  border-radius: 5px;
  margin-bottom: 25px;
}
.fontPlayer {
  font-weight: 700;
}
</style>
