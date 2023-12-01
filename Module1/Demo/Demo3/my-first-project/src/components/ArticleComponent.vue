<template>
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
    <CommentComponent :comment="article.comment"/>
</template>

<script>
    export default {
        name: 'ArticleComponent',
        components: {
            CommentComponent
        },
        props: {
            article: Object
        },
        components: {
            CommentComponent
        },
        data () {
            return {
                article: {
                    title: 'Comment soulever 100kg au bench ?',
                    content: 'Faut etre vraiment stock',
                    comment: {
                        content: 'Ceci est un commentaire sur l\'article.'
                    }
                }
            }
        }
    }
</script>

<style>
</style>