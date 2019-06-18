<template>
  <v-flex>
    <v-text-field
      v-model="filename"
      prepend-icon="attach_file"
      ref="fileTextField"
      single-line
      readonly
      :label="label"
      :required="required"
      :disabled="disabled"
      @click.native="onFocus"
    ></v-text-field>
    <input
      type="file"
      :accept="accept"
      :multiple="false"
      :disabled="disabled"
      ref="fileInput"
      @change="onFileChange"
    />
  </v-flex>
</template>

<script>
import Compressor from "compressorjs";

export default {
  name: "Uploader",
  props: {
    value: {
      type: String,
      default: ""
    },
    accept: {
      type: String,
      default: "*"
    },
    label: {
      type: String,
      default: "Please choose..."
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filename: this.value
    };
  },
  methods: {
    onFocus() {
      if (!this.disabled) {
        this.$refs.fileInput.click();
      }
    },
    onFileChange($event) {
      const files = $event.target.files || $event.dataTransfer.files;
      let file = files[0];

      this.filename = $event.target.value.split("\\").pop();

      if (file.type.includes("image")) {
        new Compressor(file, {
          quality: 0.6,
          width: 960,
          convertSize: Infinity,
          success: result => {
            this.emittingEvents(result);
          },
          error: error => {
            console.log(error.message);
          }
        });
      } else {
        this.emittingEvents(file);
      }
    },
    emittingEvents(file) {
      this.$emit("file", file);
      this.$emit("input", this.filename);
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="file"] {
  position: absolute;
  left: -99999px;
}
</style>
