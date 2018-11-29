<template>
  <div>
    <h3 class="headline mb-2">
      AR Gallery
    </h3>
    <v-layout wrap>
      <v-flex 
        v-for="model in models"
        :key="model.key"
        xs12 sm6 md3
        class="pa-2"  
      >
        <v-card>
          <v-layout justify-space-between align-center>
            <a
              :href="model.url" 
              fab flat
              class="v-btn v-btn--flat v-btn--floating theme--light success--text"
              rel="ar"
            >
              <img style="display: none;" src="" alt="">
              <v-icon color="success">open_in_new</v-icon>
            </a>
            <h4 class="subheading">{{ model.name }}</h4>
            <v-btn
              @click="openDeleteModel(model.key)"
              fab flat 
              color="error"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <v-alert
      :value="isDeleteState"
			@input="setDeleteState(false)"
      dismissible
      type="error"
			transition="fade-transition"
			class="alert"
    >
			{{ this.nameModelDeleted }} was successfully deleted!
    </v-alert>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Are you sure to delete {{ nameModelDeleted }}?</v-card-title>

        <v-card-actions>
          <v-btn
            @click="deleteModel(deleteKey); closeDeleteModel();"
            color="success"
          >
            <v-icon>check</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            @click="closeDeleteModel()"
            color="error"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import firebase from 'firebase/app';

export default {
  data() {
    return {
      dialog: false,
      deleteKey: '',
    }
  },
  computed: {
    ...mapGetters({
      models: 'getModels',
      nameModelDeleted: 'getNameDeletedModel',
      isDeleteState: 'getDeleteState'
    })
  },
  created() {
    this.fetchModels();
  },
  methods: {
    ...mapMutations(['setDeleteState', 'setNameDeletedModel']),
    ...mapActions(['fetchModels', 'deleteModel']),
    openDeleteModel(key) {
      this.dialog = true;
      this.deleteKey = key;
      this.setDeleteState(false);
      this.setNameDeletedModel(this.models[key].name);
    },
    closeDeleteModel() {
      this.dialog = false;
    }
  }
}
</script>

<style>
.subheading {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
