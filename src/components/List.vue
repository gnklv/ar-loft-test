<template>
  <div>
    <SvgLoader v-if="isLoading"/>


    <v-list v-else>
      <v-subheader>Категории</v-subheader>

      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            Добавить новую категорию
          </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon @click="editing = true">
            <v-icon color="green">add</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>


      <!--<v-list-tile>
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
      </template>-->
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

    <CategoryEditor
      :visible="editing"
      @cancel="editing = false"
      @save="editing = false"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SvgLoader from "@/components/SvgLoader";
import UpdateModel from "@/components/UpdateModel";
import DeleteModel from "@/components/DeleteModel";
import CategoryEditor from "@/components/CategoryEditor";

export default {
  name: "List",
  components: {
    UpdateModel,
    DeleteModel,
    SvgLoader,
    CategoryEditor
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
      selectedModelKey: "",
      editing: false,
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' }
          ]
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' }
                  ]
                }
              ]
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' }
          ]
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' }
              ]
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' }
          ]
        }
      ]
    };
  },
  async created() {
    await this.fetchAllCategories();
    /*await this.fetchModels();*/
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchModels"]),
    ...mapActions('categories', ['fetchAllCategories', 'createCategory']),
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
