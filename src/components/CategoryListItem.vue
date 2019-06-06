<template>
  <v-expansion-panel-content>
    <template slot="header">
      <v-layout row align-center>
        <v-icon class="mr-3">folder</v-icon>
        <h2 class="headline">{{ category.name }}</h2>

        <v-spacer></v-spacer>

        <v-btn class="ma-0" icon @click.stop="$emit('update', category)">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-btn class="ma-0" icon @click.stop="$emit('delete', category)">
          <v-icon color="red">delete</v-icon>
        </v-btn>
      </v-layout>
    </template>

    <template slot="actions">
      <v-btn class="ma-0" icon>
        <v-icon>arrow_drop_down</v-icon>
      </v-btn>
    </template>
  </v-expansion-panel-content>
</template>

<script>
export default {
  name: "CategoryListItem",
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
