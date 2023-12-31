<template>
  <div>
    <div class="buttons font-weight-bold mt-2">
      <span>-/+ de commits : </span>
      <b-button class="btn btn-primary" v-on:click="decrementCounter">-</b-button>
      <span class="counter"> {{ counter }} </span>
      <b-button class="btn btn-primary" v-on:click="incrementCounter">+</b-button>
    </div>

    <h2>Mes derniers commits sur <span class="font-weight-bold">{{ selectedRepo }}</span> :</h2>

    <li v-for="branch in branches" :key="branch" class="branch-item">
      <input
        type="radio"
        :id="branch"
        :value="branch"
        name="branch"
        v-model="currentBranch"
      />
      <label :for="branch">{{ branch }}</label>
    </li>

    <h3>Branche : {{ currentBranch }}</h3>

    <ul v-if="hasCommit">
      <li v-for="{ html_url, sha, author, commit } in commits">
        <a :href="html_url" target="_blank" class="commit">
          {{ sha.slice(0, 10) }}
        </a>
        - <span class="message">{{ truncate(commit.message) }}</span>
        <br />
        par
        <span class="author font-weight-bold">
          <a :href="author.html_url" target="_blank">
            {{ commit.author.name }}
          </a>
        </span>
        le <span class="date font-weight-bold">{{ formatCommitDate(commit.author.date) }}</span>
      </li>
    </ul>
    <p v-else class="font-italic">{{ commits }}</p>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";

export default {
  name: "Commits",

  props: {
    selectedRepo: String,
  },

  methods: {
    formatCommitDate(v) {
      return v.replace(/T/g, " à ").replace(/Z/g, " ");
    },

    truncate(v) {
      const newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },

    console(value) {
      console.log(value);
      return value;
    },
  },

  setup(props) {
    const branches = ["master", "main", "gh-pages"];

    // Variables réactives
    const commits = ref(null);
    const counter = ref(3);
    const currentBranch = ref(branches[0]);
    const currentRepo = ref(props.selectedRepo);
    const hasCommit = ref(false);

    // Surveiller les changements dans la prop "selectedRepo"
    watch(
      () => props.selectedRepo,
      (newRepo) => {
        currentRepo.value = newRepo;
      }
    );

    // Cet effet s'exécutera immédiatement, puis va se réexécuter chaque fois que la valeur de "currentBranch" ou celle de "currentRepo" changeront
    watchEffect(async () => {
      try {
        const url = `https://api.github.com/repos/SebF33/${currentRepo.value}/commits?per_page=${counter.value}&sha=${currentBranch.value}`;
        const response = await fetch(url);
        const data = await response.json();
        hasCommit.value = false;

        if (data.message === "Not Found") {
          commits.value = "Pas de commit dans cette branche.";
        } else if (data.message) {
          commits.value = data.message;
        } else {
          hasCommit.value = true;
          commits.value = data;
        }
      } catch (error) {
        commits.value = "Erreur lors de la requête API.";
      }
    });

    function decrementCounter() {
      if (counter.value === 1) {
        return;
      }
      counter.value--;
    }

    function incrementCounter() {
      if (counter.value < 1) {
        return;
      }
      counter.value++;
    }

    return {
      branches,
      commits,
      counter,
      currentBranch,
      decrementCounter,
      hasCommit,
      incrementCounter,
    };
  },
};
</script>

<style>
h2 {
  margin-top: 40px;
}

a {
  text-decoration: none;
  color: #42b883;
}

li {
  line-height: 1.4em;
  margin-bottom: 18px;
  list-style: none;
}

.branch-item {
  display: inline-block;
  margin-right: 16px;
}

.counter {
  font-size: 1.2em;
}
</style>