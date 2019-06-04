<template>
  <div>
    <SvgLoader v-if="isLoading"/>
    <v-list v-else>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            Добавить новую модель
          </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon @click="addModel">
            <v-icon color="green">add</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider />
      
      <template v-for="(model, index) in models">
        <v-list-tile
          :key="index"
          avatar
        >
          <v-list-tile-avatar>
            <img
              v-if="model.preview"
              :src="model.preview"
              alt=""
            >
            <v-icon v-else>photo</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ model.name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click="updateModel(model.key)">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-list-tile-action>
            <v-btn icon @click="deleteModel(model.key)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider
          v-if="Object.keys(models).indexOf(index) < Object.keys(models).length - 1"
          :key="`divider${index}`"
          inset
        />
      </template>
    </v-list>

    <v-dialog
      v-model="isUpdateDialog"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <UpdateModel
        v-if="isUpdateDialog"
        :modelKey="selectedModelKey"
        @close="isUpdateDialog = false"
      />
    </v-dialog>

    <v-dialog
      v-model="isDeleteDialog"
      width="300"
    >
      <DeleteModel
        :modelKey="selectedModelKey"
        @close="isDeleteDialog = false"
      ></DeleteModel>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SvgLoader from "@/components/SvgLoader";
import UpdateModel from "@/components/UpdateModel";
import DeleteModel from "@/components/DeleteModel";

export default {
  name: "List",
  components: {
    UpdateModel,
    DeleteModel,
    SvgLoader
  },
  computed: {
    ...mapState({
      models: state => state.models
    })
  },
  data() {
    return {
      isUpdateDialog: false,
      isDeleteDialog: false,
      isLoading: true,
      selectedModelKey: ""
    };
  },
  async created() {
    await this.fetchModels();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchModels"]),
    addModel() {
      this.selectedModelKey = "";
      this.isUpdateDialog = true;
    },
    updateModel(key) {
      this.selectedModelKey = key;
      this.isUpdateDialog = true;
    },
    deleteModel(key) {
      this.selectedModelKey = key;
      this.isDeleteDialog = true;
    }
  }
};
</script>
