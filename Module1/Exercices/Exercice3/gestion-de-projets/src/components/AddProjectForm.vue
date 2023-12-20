<template>
    <div class="container mt-5 glassmorphism-form">
      <h2 class="mb-4">Ajouter un Projet</h2>
      <form @submit.prevent="addProject" class="glassmorphism-form">
        <div class="mb-3">
          <label for="projectName" class="form-label">Nom du Projet:</label>
          <input v-model="newProject.name" type="text" class="form-control" id="projectName" required>
        </div>

        <div class="mb-3">
          <label for="projectDescription" class="form-label">Description du Projet:</label>
          <textarea v-model="newProject.description" class="form-control" id="projectDescription" required></textarea>
        </div>
  
        <button type="submit" class="btn btn-success">Ajouter Projet</button>
      </form>
    </div>
</template>
  
  
<script>
  export default {
    data() {
      return {
        newProject: {
          name: '',
          description: '',
        },
      };
    },
    methods: {
      addProject() {
        this.$emit('add-project', this.newProject);
        this.newProject = {
          name: '',
          description: '',
        };
      },
    },
  };
</script>

<style scoped>
.glassmorphism-form {
  background: rgba(162, 206, 242, 0.2);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.glassmorphism-form label {
  color: rgba(0, 0, 0, 0.8); 
}

.glassmorphism-form input,
.glassmorphism-form textarea {
  background: transparent;
  border: 1px solid rgba(162, 206, 242, 0.2);
  color: #000000; 
}

.glassmorphism-form input:focus,
.glassmorphism-form textarea:focus {
  border: 1px solid #000000;
}
</style>