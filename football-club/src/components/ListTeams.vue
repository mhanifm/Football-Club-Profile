<template>
  <div class="card shadow bg-white borders">
    <img class="card-img-top imgs" :src="team.crestUrl" alt="Broken Image"/>
    <div class="card-body">
        <h5 class="card-title text-center fontName">{{ team.name }}</h5>
        <router-link
          :to="{name: 'DetailsTeam', params: {id: team.id}}"
          class="btn btn-warning mx-80 d-block w-100 rounded shadow fontSize">More Info</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListTeams',
  props: ['team']
}
</script>

<style>
.imgs {
  height: 270px;
  padding-top: 5px;
}
.borders {
  border-radius: 20px;
}
.fontName {
  font-size: 25px;
  font-weight: bold;
}
</style>
