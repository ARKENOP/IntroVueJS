<template>
    <div>
      <h2>Ajouter une Tâche</h2>
      <form @submit.prevent="addTask">
        <label for="taskTitle">Titre de la tâche:</label>
        <input type="text" id="taskTitle" v-model="newTaskTitle" required>
        <button type="submit">Ajouter la tâche</button>
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
  