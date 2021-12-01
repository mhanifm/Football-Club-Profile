<template>
  <router-link
    :to="{name: 'TeamByArea', query: {area: area.id}}"
    class="btn btn-secondary mx-80 d-block w-100 rounded shadow">{{ area.name }}</router-link>
</template>

<script>

export default {
  name: 'Area',
  props: ['area']
}
</script>

<style>

</style>
