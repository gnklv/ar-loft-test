<template>
  <v-layout column>
    <CategoriesGallery :categories="Object.values(categories)"/>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";
import CategoriesGallery from "@/components/CategoriesGallery";

export default {
  name: "PageHome",
  components: {
    CategoriesGallery
  },
  mixins: [asyncDataStatus],
  computed: {
    ...mapState({
      categories: state => state.categories
    }),
  },
  async created() {
    const categories = await this.fetchAllCategories();
    await Promise.all(
      categories.map(category => {
        if (category.models) {
          return this.fetchModels({ ids: Object.keys(category.models) });
        }
        return false;
      })
    );
    this.asyncDataStatus_fetched();
  },
  methods: {
    ...mapActions("categories", ["fetchAllCategories"]),
    ...mapActions("models", ["fetchModels"]),
    filteredModels(categoryId) {
      return Object.values(this.models).filter(
        model => model.categoryId === categoryId
      );
    }
  }
};
</script>
