<template>
  <v-tabs show-arrows slider-color="grey">
    <v-tab
      v-for="category in categories"
      :key="`tab-${category.key}`"
      :href="`#tab-${category.key}`"
    >
      {{ category.name }}
    </v-tab>

    <v-tab-item
      v-for="category in categories"
      :key="`tab-item-${category.key}`"
      :value="`tab-${category.key}`"
    >
      <ModelsGallery :category="category"/>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import ModelsGallery from '@/components/ModelsGallery';

export default {
  name: "CategoriesGallery",
  components: {
    ModelsGallery
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
};
</script>
