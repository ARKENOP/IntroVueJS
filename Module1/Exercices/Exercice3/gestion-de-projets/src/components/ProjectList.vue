<template>
    <div class="container mt-5 glassmorphism-bg-primary">
      <h2>Liste des Projets</h2>
      <ul class="list-group">
        <project-item
          v-for="project in projects"
          :key="project.id"
          :project="project"
        ></project-item>
      </ul>
      <div v-if="projects.length === 0" class="mt-3">Aucun projet disponible.</div>
    </div>
</template>
  
<script>
  import ProjectItem from './ProjectItem.vue';
  
  export default {
    components: {
      ProjectItem,
    },
    props: {
      projects: Array,
    },
  };
</script>  


<style scoped>
.glassmorphism-bg-primary {
  background: rgba(93, 175, 240, 0.2); 
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>