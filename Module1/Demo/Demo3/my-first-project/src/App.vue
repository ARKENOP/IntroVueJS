<template>
  <HeaderComponent />
  <ArticleComponent :article="currentArticle" />
  <SidebarComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import ArticleComponent from './components/ArticleComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'ParentComponent',
  components: {
    HeaderComponent,
    ArticleComponent,
    SidebarComponent,
    FooterComponent

  },
  data() {
    return {
      currentArticle: {
        title: 'Titre de l\'article',
        content: 'Contenu de l\'article'
      }

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
