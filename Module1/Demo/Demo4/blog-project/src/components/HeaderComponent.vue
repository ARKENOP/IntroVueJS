<template>
  <header>
    <h1>Mon Blog</h1>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/formulaire">Aller sur Formulaire Live</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent' //nom du composant

}


</script>

<style>
header {
  background-color: lightgray;
  padding: 10px 0;
  text-align: center;
}

header h1 {
  margin: 0;
  color: #333;
  font-family: 'Arial', sans-serif;
}

nav {
  margin-top: 10px;
}
</style>
