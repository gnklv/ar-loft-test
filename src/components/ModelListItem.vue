<template>
  <v-layout
    class="pl-5 pr-4 py-2"
    :class="{ 'grey lighten-5': isOdd }"
    row align-center
  >
    <v-avatar class="mr-2" size="36">
      <img
        v-if="model.preview"
        :src="model.preview.url"
        :alt="model.name"
      />
      <v-icon v-else>photo</v-icon>
    </v-avatar>

    <h3 class="subheading">{{ model.name}}</h3>

    <v-spacer></v-spacer>

    <v-btn class="ma-0" icon @click="$emit('update', model)">
      <v-icon>edit</v-icon>
    </v-btn>

    <v-btn class="ma-0" icon @click="$emit('delete', model)">
      <v-icon color="red">delete</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: "ModelListItem",
  props: {
    model: {
      type: Object,
      required: true
    },
    isOdd: {
      type: Boolean,
      default: false
    }
  }
};
</script>
