<template>
  <div id="home-page">
    <div class="box">
      <h2>Football Info</h2>
      <p>Simple Web App to view a Football Club Profile.
        Show all areas. Show Football Club based on area.
        Show Football Club Information.
        Show Details Football Player.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}

</script>

<style scoped>
  #home-page {
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box {
    position: relative;
    max-width: 600px;
    padding: 50px;
    background: rgba(255, 255, 255, .4);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .7);
  }
  .box h2 {
    margin: 0 0 20px;
    padding: 0;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
  }
</style>
