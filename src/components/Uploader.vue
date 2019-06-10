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
      const file = files[0];
      if (files) {
        if (files.length > 0) {
          this.filename = [...files].map(file => file.name).join(", ");
        } else {
          this.filename = null;
        }
      } else {
        this.filename = $event.target.value.split("\\").pop();
      }
      this.$emit("input", this.filename);
      this.$emit("file", file);
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
