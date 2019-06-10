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
    const categories = await this.fetchAllCategories();
    await Promise.all(categories.map(category => {
      if (category.models) {
        return this.fetchModels({ids: Object.keys(category.models)})
      }
      return false;
    }));
    this.asyncDataStatus_fetched();
  },

  methods: {
    ...mapActions('categories', ['fetchAllCategories']),
    ...mapActions('models', ['fetchModels'])
  }
};
</script>