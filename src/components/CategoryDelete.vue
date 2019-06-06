<template>
  <v-card>
    <v-toolbar dark color="red">
      <v-toolbar-title>
        Удалить категорию {{ category.name }}?
      </v-toolbar-title>
    </v-toolbar>

    <v-card-actions>
      <v-btn icon :loading="loading" :disabled="loading" @click="confirm">
        <v-icon>done</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon :disabled="loading" @click="cancel">
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CategoryDelete",
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions('categories', ['deleteCategory']),
    async confirm() {
      this.loading = true;

      const payload = {
        id: this.category.key
      };
      await this.deleteCategory(payload);

      this.$emit('confirm');
      this.loading = false;
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>
