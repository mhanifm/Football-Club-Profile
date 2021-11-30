<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="row">
      <div class="col-2 mb-3"
        v-for="area in areas" :key="area.id">
        <div class="btn btn-outline-infobtn btn-secondary mx-auto d-block w-100 rounded shadow">{{ area.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import footBallApi from '../apis/footballApi'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      areas: []
    }
  },
  methods: {
    async fetchFootBallAreas () {
      try {
        const footBallAreas = await footBallApi.get('/areas')
        console.log(footBallAreas.data.areas)
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
