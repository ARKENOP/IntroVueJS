<template>
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
</template>

<script>
    export default {
        name: 'ArticleComponent',
        props: {
            article: Object
        }
    }
</script>

<style>
</style>