<template>
  <div class="hello">
    <h1>{{ title }}</h1>

    <hr />

    <div class="input-group flex-nowrap m-auto">
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping">@</span>
      </div>
      <input
        v-model="searchQuery"
        type="text"
        class="form-control"
        placeholder="Filtrer par nom de projet..."
        aria-label="Projet"
        aria-describedby="addon-wrapping"
      />
    </div>

    <Table :columns="gridColumns" :data="gridData" :filterKey="searchQuery" />
  </div>
</template>

<script>
import Table from "./Table.vue";
import { ref } from "vue";

export default {
  name: "Home",

  components: {
    Table,
  },

  data() {
    return {
      title: "MyCommits",
    };
  },

  setup() {
    const searchQuery = ref("");
    const gridColumns = ["repo", "stack"];
    const gridData = [
      { repo: "magicardt", stack: "Vue.js" },
      { repo: "sebflix", stack: "PHP" },
      { repo: "shareus", stack: "Slim" },
      { repo: "thaimes", stack: "Symfony" },
      { repo: "urarts", stack: "Fresh" },
    ];

    return {
      gridColumns,
      gridData,
      searchQuery,
    };
  },
};
</script>

<!-- Attribut "scoped" pour limiter le CSS à ce composant uniquement -->
<style scoped>
h1,
h2 {
  font-weight: bold;
}

h1 {
  margin-top: 0px;
}

ul {
  list-style-position: inside;
}

a {
  color: #42b983;
}

.input-group {
  max-width: 260px;
}
</style>