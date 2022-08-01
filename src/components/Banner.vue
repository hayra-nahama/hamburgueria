<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style scoped>
#main-banner {
  background-image: url("../../public/imagem/template.jpg");
  background-position: 0 -500px;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#main-banner h1 {
  color: #fff;
  text-align: center;
  font-size: 60px;
  background-color: #222;
  padding: 20px 40px;
}
@media screen and (max-width: 758px) {
  #main-banner {
    background-image: url("../../public/imagem/template.jpg");
    background-position: 0 -400px;
    background-size: cover;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  #main-banner h1 {
    color: #fff;
    text-align: center;
    font-size: 30px;
    background-color: #222;
    padding: 10px 20px;
  }
}
</style>