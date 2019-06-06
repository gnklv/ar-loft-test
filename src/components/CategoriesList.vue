<template>
  <v-flex xs12>
    <v-expansion-panel>
      <CategoryListItem
        v-for="category in categories"
        :key="category.key"
        :category="category"
        @update="updateCategoriesItem"
        @delete="confirmCategoryDelete"
      />

      <v-expansion-panel-content disabled>
        <template slot="header">
          <v-layout row align-center>
            <v-icon class="mr-3">folder</v-icon>
            <h2 class="headline">Добавить новую категорию</h2>

            <v-spacer></v-spacer>

            <v-btn class="ma-0" icon @click.stop="createCategoriesItem" style="pointer-events: all">
              <v-icon color="green">add</v-icon>
            </v-btn>
          </v-layout>
        </template>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-dialog :value="editing" fullscreen transition="dialog-bottom-transition">
      <CategoryEditor
        v-if="editing"
        :category="category"
        @cancel="editing = false"
        @save="editing = false"
      />
    </v-dialog>

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
import CategoryListItem from '@/components/CategoryListItem';
import CategoryEditor from '@/components/CategoryEditor';
import CategoryDelete from '@/components/CategoryDelete';

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
    }
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
