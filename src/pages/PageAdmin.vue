<template>
  <v-layout column>
    <CategoriesList :categories="categoriesValues"/>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CategoriesList from '@/components/CategoriesList';
import asyncDataStatus from '@/mixins/asyncDataStatus';

export default {
  name: "PageAdmin",

  components: {
    CategoriesList
  },

  mixins: [asyncDataStatus],

  computed: {
    ...mapState({
      categories: state => state.categories
    }),
    categoriesValues() {
      return Object.values(this.categories);
    }
  },

  async created() {
    await this.fetchAllCategories();
    this.asyncDataStatus_fetched();
  },

  methods: {
    ...mapActions('categories', ['fetchAllCategories'])
  }
};
</script>