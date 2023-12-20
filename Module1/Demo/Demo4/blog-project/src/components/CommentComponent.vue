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
  },
  methods:{
    commentClick(commentId){
      alert(`Comment ${commentId} cliqué`);
    }
  }
}

</script>
