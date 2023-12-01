<template>
  <HeaderComponent/>
  <ArticleComponent :article="article"/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ArticleComponent from './components/ArticleComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    HeaderComponent,
    FooterComponent,
    ArticleComponent
  },
  data () {
    return {
      article: {
        title: 'Comment soulever 100kg au bench ?',
        content: 'Faut etre vraiment stock'
      }
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
</style>
