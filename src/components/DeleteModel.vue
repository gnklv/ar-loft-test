<template>
  <v-card>
    <v-toolbar dark color="red">
      <v-toolbar-title>
        Удалить модель?
      </v-toolbar-title>
    </v-toolbar>

    <v-card-actions>
      <v-btn
        icon
        :loading="isLoading"
        :disabled="isLoading"
        @click="onDelete"
      >
        <v-icon>done</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        :disabled="isLoading"
        @click="onClose"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeleteModel",
  props: {
    modelKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions(["deleteModel"]),
    async onDelete() {
      this.isLoading = true;
      await this.deleteModel(this.modelKey);
      this.isLoading = false;
      this.onClose();
    },
    onClose() {
      this.$emit("close");
    }
  }
};
</script>
