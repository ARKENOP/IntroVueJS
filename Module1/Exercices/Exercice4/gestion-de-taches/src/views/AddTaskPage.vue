<template>
    <div class="container mt-4">
      <h2>Ajouter une Tâche</h2>
      <form @submit.prevent="addTask">
        <div class="mb-3">
          <label for="taskTitle" class="form-label">Titre de la tâche:</label>
          <input type="text" id="taskTitle" v-model="newTaskTitle" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter la tâche</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddTask',
    data() {
      return {
        newTaskTitle: '',
      };
    },
    methods: {
      addTask() {
        // Ajoutez la nouvelle tâche au tableau en mémoire
        this.$router.push('/all-tasks'); // Redirigez vers la liste des tâches après l'ajout
      },
    },
  };
  </script>
  