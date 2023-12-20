<template>
  <div id="app">
    <add-project-form @add-project="addProject"></add-project-form>
    <project-list :projects="projects"></project-list>
  </div>
</template>

<script>
import ProjectList from './components/ProjectList.vue';
import AddProjectForm from './components/AddProjectForm.vue';

export default {
  components: {
    ProjectList,
    AddProjectForm,
  },
  data() {
    return {
      projects: [], 
    };
  },
  methods: {
    addProject(newProject) {
      this.projects.push(newProject);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
