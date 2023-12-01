<template>
    <div>
        <h2>Comment</h2>
        <p>{{ comment.content }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CommentComponent',
        props: {
            comment: Object
        }
    }
</script>

<style>
</style>
