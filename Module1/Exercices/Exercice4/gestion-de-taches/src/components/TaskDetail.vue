<template>
    <div>
      <h2>Détails de la Tâche</h2>
      <p>ID de la tâche : {{ $route.params.id }}</p>
      <!-- Affichez d'autres détails de la tâche ici -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskDetail',
  };
  </script>
  