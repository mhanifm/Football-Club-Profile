<template>
  <div class="container">
    <div class="row justify-content-center"
      v-if="teams.length">
        <ListTeams
          class="col-3 ml-2 mr-2 mb-3"
          v-for="team in teams" :key="team.id" :team="team"></ListTeams>
    </div>
    <div v-else class="text-white">Team Not Found</div>
  </div>
</template>

<script>
import footBallApi from '../apis/footballApi'
import ListTeams from '../components/ListTeams.vue'

export default {
  name: 'TeamByArea',
  components: {
    ListTeams
  },
  data () {
    return {
      teams: []
    }
  },
  methods: {
    async fetchTeamsByArea () {
      try {
        const teamsByArea = await footBallApi.get(`/teams?areas=${this.$route.query.area}`)
        this.teams = teamsByArea.data.teams
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    this.fetchTeamsByArea()
  }
}
</script>

<style>

</style>
