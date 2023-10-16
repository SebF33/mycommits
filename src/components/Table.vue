<template>
  <div class="m-auto">
    <table v-if="filteredData.length" class="mx-auto mt-4">
      <thead>
        <tr>
          <th
            v-for="key in columns"
            @click="sortBy(key)"
            :class="{ active: sortKey == key }"
          >
            {{ capitalize(key) }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="font-weight-bold">
        <tr v-for="entry in filteredData" @click="handleItemClick(entry.repo)">
          <td v-for="key in columns" style="cursor: pointer">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Pas de résultats trouvés.</p>

    <Commits :selectedRepo="selectedRepo" />
  </div>
</template>

<script>
import Commits from "./Commits.vue";

export default {
  components: {
    Commits,
  },

  props: {
    columns: Array,
    counter: Number,
    data: Array,
    filterKey: String,
  },

  data() {
    return {
      selectedRepo: "magicardt",
      sortKey: "",
      sortOrders: this.columns.reduce((o, key) => ((o[key] = 1), o), {}),
    };
  },

  computed: {
    filteredData() {
      let data = this.data;
      let filterKey = this.filterKey && this.filterKey.toLowerCase();
      if (filterKey) {
        data = data.filter((row) => {
          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }

      const key = this.sortKey;
      if (key) {
        const order = this.sortOrders[key];
        data = data.slice().sort((a, b) => {
          a = a[key];
          b = b[key];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }

      return data;
    },
  },

  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    console(value) {
      console.log(value);
      return value;
    },

    handleItemClick(value) {
      this.selectedRepo = value;
    },

    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] *= -1;
    },
  },
};
</script>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 6px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #dddcdc;
}

th,
td {
  min-width: 120px;
  padding: 8px 16px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>