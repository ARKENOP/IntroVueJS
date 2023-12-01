<template>
    <div>
      <p>{{ comment }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommentComponent',
    props: {
      comment: String
    }
  }
  
  </script>
  