<template>
    <li class="list-group-item glassmorphism-card-secondary">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </li>
</template>  

<script>
export default {
    props: {
    project: Object, 
    },
};
</script>

<style scoped>
.glassmorphism-card-secondary {
  background: rgba(255, 214, 165, 0.2); 
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px; 
}
</style>