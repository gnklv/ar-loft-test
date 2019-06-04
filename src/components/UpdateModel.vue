<template>
  <v-card>
    <v-toolbar dark color="green">
      <v-toolbar-title>{{ modelKey ? 'Редактировать модель' : 'Добавить модель' }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon dark
        :disabled="isSaving"
        @click="onClose"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-flex xs12 pa-4>
      <v-text-field
        v-model="name"
        label="Имя модели"
        :disabled="isSaving"
      ></v-text-field>
    </v-flex>

    <v-flex xs12 pa-4 class="text-xs-center">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        height="150"
      />
      <v-text-field
        v-if="progressImage === 0"
        v-model="imageName"
        label="Выбрать картинку"
        prepend-icon="attach_file"
        readonly
        :disabled="isSaving"
        @click="pickImage"
      ></v-text-field>
      <v-progress-linear
        v-if="progressImage > 0"
        :value="progressImage"
      ></v-progress-linear>
      <input
        type="file"
        style="display: none"
        ref="image"
        accept="image/*"
        :multiple="false"
        @change="onImagePicked"
      >
    </v-flex>

    <v-flex xs12 pa-4 class="text-xs-center">
      <img
        v-if="modelUrl"
        src="@/assets/images/usdz.png"
        height="50"
      >
      <v-text-field
        v-if="progressModel === 0"
        v-model="modelName"
        label="Выбрать модель"
        prepend-icon="attach_file"
        readonly
        :disabled="isSaving"
        @click="pickModel"
      ></v-text-field>
      <v-progress-linear
        v-if="progressModel > 0"
        :value="progressModel"
      ></v-progress-linear>
      <input
        type="file"
        style="display: none"
        ref="model"
        accept=".usdz"
        :multiple="false"
        @change="onModelPicked"
      >
    </v-flex>

    <v-flex xs12 pa-4>
      <v-btn
        color="primary"
        :loading="isSaving"
        :disabled="!valid || isSaving"
        @click="onSave"
      >
        Save
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UpdateModel",
  props: {
    modelKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name: "",
      imageName: "",
      imageUrl: "",
      imageFile: "",
      modelName: "",
      modelUrl: "",
      modelFile: "",
      isSaving: false
    };
  },
  computed: {
    ...mapState({
      models: state => state.models,
      progressModel: state => state.progressUpload.file,
      progressImage: state => state.progressUpload.preview
    }),
    valid() {
      return !!this.name && (!!this.imageFile || !!this.imageUrl) && (!!this.modelFile || !!this.modelUrl);
    }
  },
  mounted() {
    if (this.modelKey) {
      const model = this.models[this.modelKey];
      this.name = model.name;

      if (model.url) {
        this.modelName = model.name;
        this.modelUrl = model.url;
      }

      if (model.preview) {
        this.imageName = model.name;
        this.imageUrl = model.preview;
      }
    }
  },
  methods: {
    ...mapActions(["uploadModel"]),
    pickImage() {
      this.$refs.image.click();
    },
    onImagePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) return;
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      }
    },
    pickModel() {
      this.$refs.model.click();
    },
    onModelPicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.modelName = files[0].name;
        if (this.modelName.lastIndexOf(".") <= 0) return;
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.modelUrl = fr.result;
          this.modelFile = files[0]; // this is an image file that can be sent to server...
        });
      }
    },
    async onSave() {
      this.isSaving = true;
      await this.uploadModel({
        modelKey: this.modelKey,
        file: this.modelFile,
        name: this.name,
        preview: this.imageFile
      });
      this.isSaving = false;
      this.onClose();
    },
    onClose() {
      this.name = "";
      this.imageName = "";
      this.imageFile = "";
      this.imageUrl = "";
      this.modelName = "";
      this.modelFile = "";
      this.modelUrl = "";
      this.$emit("close");
    }
  }
};
</script>
