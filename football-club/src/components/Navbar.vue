<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand fontStyle"><b>Football Info</b></a>
      <div class="d-flex navbar-brand">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-3">
          <li class="nav-item">
            <router-link class="nav-link font-nav" to="/"><i class="fas fa-home mr-2"></i>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link font-nav" to="/country"><i class="fas fa-plane mr-2"></i>Country</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.fontStyle {
  font-family: 'Signika Negative', sans-serif;
  font-size: 30px;
  font-style: italic;
}
.font-nav {
  font-family: 'Signika Negative', sans-serif;
  font-size: 20px;
}
</style>
