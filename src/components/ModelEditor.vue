<template>
  <v-card>
    <v-toolbar dark color="green">
      <v-toolbar-title>
        {{
          isUpdated ? `Редактировать модель ${model.name}` : "Добавить модель"
        }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon dark :disabled="loading" @click="cancel">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-flex xs12 pa-3>
      <v-text-field v-model="name" label="Название модели" />

      <v-select
        v-model="category"
        :items="categoriesValues"
        item-value="key"
        item-text="name"
        label="Выберите категорию"
      ></v-select>

      <Uploader
        v-model="usdzName"
        label="Выберите модель"
        accept=".usdz"
        @file="usdzChosen"
      />

      <Uploader
        v-model="previewName"
        label="Выберите изображение"
        accept="image/*"
        @file="previewChosen"
      ></Uploader>

      <v-btn
        class="ma-0 mt-4"
        color="primary"
        :loading="loading"
        :disabled="loading || !valid"
        @click="save"
      >
        Сохранить
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Uploader from "@/components/Uploader";

export default {
  name: "ModelEditor",
  components: {
    Uploader
  },
  props: {
    categoryId: {
      type: String,
      required: true
    },
    model: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      name: this.model ? this.model.name : "",
      category: this.categoryId,
      usdzName: this.model && this.model.usdz ? this.model.usdz.filename : "",
      usdz: null,
      previewName: this.model && this.model.preview ? this.model.preview.filename : "",
      preview: null
    };
  },
  computed: {
    ...mapState({
      categories: state => state.categories
    }),
    categoriesValues() {
      return Object.values(this.categories);
    },
    isUpdated() {
      return !!this.model;
    },
    valid() {
      return this.name && this.usdzName;
    },
    checkUsdzName() {
      return this.model.usdz ? this.model.usdz.filename : ""
    },
    checkPreviewName() {
      return this.model.preview ? this.model.preview.filename : ""
    }
  },
  methods: {
    ...mapActions("models", ["createModel", "updateModel"]),
    cancel() {
      this.$emit("cancel");
    },
    async save() {
      this.loading = true;

      const model = await this.persist();
      this.$emit("save", model);

      this.loading = false;
    },
    create() {
      const model = {
        name: this.name,
        categoryId: this.categoryId,
        usdzFile: this.usdz,
        previewFile: this.preview
      };
      return this.createModel(model);
    },
    update() {
      const model = {
        id: this.model.key,
        name: this.name === this.model.name ? "" : this.name,
        categoryId: this.category === this.model.categoryId ? "" : this.category,
        usdzFile: this.usdzName === this.checkUsdzName ? null : this.usdz,
        previewFile: this.previewName === this.checkPreviewName ? null : this.preview
      };
      return this.updateModel(model);
    },
    persist() {
      return this.isUpdated ? this.update() : this.create();
    },
    usdzChosen(file) {
      this.usdz = file;
    },
    previewChosen(file) {
      this.preview = file;
    }
  }
};
</script>
