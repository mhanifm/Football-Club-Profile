<template>
  <div class="container-area">
    <div class="row d-flex justify-content-center"
      v-if="areas.length">
      <Area class="col-2 mr-3 ml-3 mb-3"
        v-for="area in areas" :key="area.id" :area="area">
      </Area>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
import footBallApi from '../apis/footballApi'
import Area from '../components/Area.vue'

export default {
  name: 'Home',
  components: {
    Area
  },
  data () {
    return {
      areas: []
    }
  },
  methods: {
    async fetchFootBallAreas () {
      try {
        const footBallAreas = await footBallApi.get('/areas')
        this.areas = footBallAreas.data.areas
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

<style scoped>
  .container-area {
    display: flex;
    background-color: aqua;
    justify-content: center;
  }
</style>
