<template>
  <!--Ajouter un nouvel article-->
  <form @submit.prevent="addArticle">
    <h2>Ajouter un article</h2>
    <input id="titreArticleInput" type="text" v-model="newArticle.title" placeholder="Titre de l'article">
    <textarea name="" id="contentArticleInput" v-model="newArticle.content" placeholder="Contenu de l'article" cols="50"
      rows="4"></textarea>
    <button id="btnArticleSbmit" type="submit">Ajouter Article</button>
    <p>Nombre Total d'articles : {{ totalArticles }}</p>
  </form>

  <div v-if="articles.length">
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p> {{ article.content }}</p>
      <button @click="handleClick(article.id)">Lire Plus</button>
      <!--Intégrer le commentaire-->
      <CommentComponent :comment="article.comment" />
    </div>
  </div>
  <p v-else>Aucun Article </p>
</template>

<script>
import CommentComponent from './CommentComponent.vue';


export default {
  name: 'ArticleComponent',
  component: {
    CommentComponent
  },
  components: { CommentComponent },
  methods: {
    onCommentClick(commentId) {
      alert(`Commentaire ${commentId} cliqué`);
    },
    handleClick(articleId) {
      alert(`Article ${articleId} cliqué`);
    },
    addArticle() {
      const newId = this.articles.length + 1;
      const articleToAdd = {
        id: newId,
        title: this.newArticle.title,
        content: this.newArticle.content,
        comment: ''
      };
      this.articles.push(articleToAdd);
      console.log(this.articles);

      this.newArticle.title = '';
      this.newArticle.content = '';
    }
  },
  data() {
    return {
      newArticle: {
        title: '',
        content: ''
        //reprise en m1 slide46 pour ajputer du style css
      },
      articles: [
        { id: 1, title: 'Article1', content: 'Description de mon article', comment: 'Commentaire de l\'article' },
        { id: 2, title: 'Article2', content: 'Description de mon article', comment: 'Commentaire de l\'article' },
        { id: 3, title: 'Article3', content: 'Description de mon article', comment: 'Commentaire de l\'article' },
      ]
    }
  },
  computed: {
    totalArticles() {
      return this.articles.length;
    }
  },
  watch: {
    articles(newValue, oldValue) {
      console.log('articles modifiés');
      console.log(newValue);
      console.log(oldValue);
    }
  }
}

</script>

<style>
.presentationDiv {
  display: flex;
  justify-content: space-around;
}
 
/*Style article*/
h2 {
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
 
p {
  color: #666;
  font-size: 14px;
}
 
/*Style formulaire*/
#titreArticleInput,
#contentArticleInput,
#btnArticleSubmit {
  border-radius: 10px;
  margin: 20px;
}
 
form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 20vw;
  border: 2px solid black;
  border-radius: 10px;
}
</style>