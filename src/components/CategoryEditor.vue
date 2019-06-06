<template>
  <v-card>
    <v-toolbar dark color="green">
      <v-toolbar-title>
        {{
          isUpdate
            ? `Редактировать категорию ${category.name}`
            : "Добавить категорию"
        }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon dark :disabled="loading" @click="cancel">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-flex xs12 pa-4>
      <v-text-field v-model="name" label="Имя категории" />
    </v-flex>

    <v-flex xs12 px-4>
      <v-btn
        class="ma-0"
        color="primary"
        :loading="loading"
        :disabled="loading"
        @click="save"
      >
        Сохранить
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CategoryEditor",
  props: {
    category: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      loading: false,
      name: this.category ? this.category.name : ""
    };
  },
  computed: {
    isUpdate() {
      return !!this.category;
    }
  },
  methods: {
    ...mapActions("categories", ["createCategory", "updateCategory"]),
    cancel() {
      this.name = "";

      this.$emit("cancel");
    },
    async save() {
      this.loading = true;

      const category = await this.persist();
      this.$emit("save", category);

      this.name = "";
      this.loading = false;
    },
    create() {
      const category = {
        name: this.name
      };

      return this.createCategory(category);
    },
    update() {
      const payload = {
        id: this.category["key"],
        name: this.name
      };

      return this.updateCategory(payload);
    },
    persist() {
      return this.isUpdate ? this.update() : this.create();
    }
  }
};
</script>
