<template>
    <div>
      <h2 class="mt-4 mb-4">Toutes les Tâches</h2>
      <ul class="list-group">
        <li v-for="task in tasks" :key="task.id" class="list-group-item">
          <router-link :to="{ path: `/task/${task.id}` }" class="text-decoration-none">{{ task.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AllTasks',
    data() {
      return {
        tasks: [
          { id: 1, title: 'Tâche 1' },
          { id: 2, title: 'Tâche 2' },
          // ... Ajoutez d'autres tâches statiques ici
        ],
      };
    },
  };
</script>
  