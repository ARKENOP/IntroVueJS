<template>
  <div id="app">
    <HeaderComponent/>
    <div class="main-content">
      <SidebarComponent :articles="articles"/>
      <ArticleComponent :article="article"/>
      <CommentComponent :comment="comment"/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ArticleComponent from './components/ArticleComponent.vue'
import CommentComponent from './components/CommentComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    CommentComponent,
    SidebarComponent
  },
  data () {
    return {
      article: {
        title: 'Comment soulever 100kg au bench ?',
        content: 'Faut etre vraiment stock'
      },
      comment: {
        content: 'Ceci est un commentaire sur l\'article.'
      },
      articles: [
        { id: 1, title: 'Titre de l\'article 1' },
        { id: 2, title: 'Titre de l\'article 2' },
        // Ajoutez d'autres articles si nécessaire
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content {
  display: flex;
}
</style>
