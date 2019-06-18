<template>
  <v-flex>
    <ModelListItem
      v-for="(model, index) in filteredModels"
      :key="model.key"
      :is-odd="!(index % 2)"
      :model="model"
      @update="updateModelsItem"
      @delete="confirmModelDelete"
    />

    <v-layout class="pl-5 pr-4 py-2" row align-center justify-end>
      <v-tooltip top>
        <template slot="activator">
          <v-btn class="ma-0" icon @click="createModelsItem">
            <v-icon color="green">add</v-icon>
          </v-btn>
        </template>
        <span>Добавить модель</span>
      </v-tooltip>
    </v-layout>

    <v-bottom-sheet v-model="editing" inset persistent>
      <ModelEditor
        v-if="editing"
        :model="model"
        :category-id="categoryId"
        @cancel="editing = false"
        @save="editing = false"
      />
    </v-bottom-sheet>

    <v-dialog :value="confirm" width="300">
      <ModelDelete
        v-if="confirm"
        :model="model"
        @confirm="confirm = false"
        @cancel="confirm = false"
      />
    </v-dialog>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";
import ModelListItem from "@/components/ModelListItem";
import ModelEditor from "@/components/ModelEditor";
import ModelDelete from "@/components/ModelDelete";
import { sortByNumbersAndLetters } from "../services";

export default {
  name: "ModelsList",
  components: {
    ModelListItem,
    ModelEditor,
    ModelDelete
  },
  data() {
    return {
      editing: false,
      model: null,
      confirm: false
    };
  },
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      models: state => state.models
    }),
    filteredModels() {
      const models = Object.values(this.models).filter(
        model => model.categoryId === this.categoryId
      );
      return sortByNumbersAndLetters({ array: models, sortedValue: 'name' });
    }
  },
  methods: {
    createModelsItem() {
      this.model = null;
      this.editing = true;
    },
    updateModelsItem(model) {
      this.model = model;
      this.editing = true;
    },
    confirmModelDelete(model) {
      this.model = model;
      this.confirm = true;
    }
  }
};
</script>
