<template>
  <v-expansion-panel-content>
    <template slot="header">
      <v-layout row align-center>
        <v-icon class="mr-2">folder</v-icon>
        <h2 class="title font-weight-regular ellipsis">{{ category.name }}</h2>

        <v-spacer></v-spacer>

        <v-btn class="ma-0" icon @click.stop="$emit('update', category)">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-btn
          v-if="deletable"
          icon
          class="ma-0"
          @click.stop="$emit('delete', category)"
        >
          <v-icon color="red">delete</v-icon>
        </v-btn>
      </v-layout>
    </template>

    <template slot="actions">
      <v-btn class="ma-0" icon>
        <v-icon>arrow_drop_down</v-icon>
      </v-btn>
    </template>

    <ModelsList :category-id="category.key"/>
  </v-expansion-panel-content>
</template>

<script>
import ModelsList from '@/components/ModelsList';

export default {
  name: "CategoryListItem",
  components: {
    ModelsList,
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    deletable() {
      return !this.category.models;
    }
  }
};
</script>
