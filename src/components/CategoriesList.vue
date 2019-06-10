<template>
  <v-flex>
    <v-expansion-panel expand class="mb-4">
      <CategoryListItem
        v-for="category in categories"
        :key="category.key"
        :category="category"
        @update="updateCategoriesItem"
        @delete="confirmCategoryDelete"
      />
    </v-expansion-panel>

    <v-layout row align-center justify-end class="px-4">
      <v-tooltip top>
        <template slot="activator">
          <v-btn
            class="ma-0"
            color="green"
            fab dark small
            @click="createCategoriesItem"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </template>
        <span>Добавить категорию</span>
      </v-tooltip>
    </v-layout>

    <v-bottom-sheet inset persistent v-model="editing">
      <CategoryEditor
        v-if="editing"
        :category="category"
        @cancel="editing = false"
        @save="editing = false"
      />
    </v-bottom-sheet>

    <v-dialog :value="confirm" width="300">
      <CategoryDelete
        v-if="confirm"
        :category="category"
        @confirm="confirm = false"
        @cancel="confirm = false"
      />
    </v-dialog>
  </v-flex>
</template>

<script>
import CategoryListItem from "@/components/CategoryListItem";
import CategoryEditor from "@/components/CategoryEditor";
import CategoryDelete from "@/components/CategoryDelete";

export default {
  name: "CategoriesList",
  components: {
    CategoryListItem,
    CategoryEditor,
    CategoryDelete
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      editing: false,
      category: null,
      confirm: false
    };
  },
  methods: {
    createCategoriesItem() {
      this.category = null;
      this.editing = true;
    },
    updateCategoriesItem(category) {
      this.category = category;
      this.editing = true;
    },
    confirmCategoryDelete(category) {
      this.category = category;
      this.confirm = true;
    }
  }
};
</script>
