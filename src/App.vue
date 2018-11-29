<template>
  <v-app>
    <v-content>
      <v-container>

        <upload-model class="mb-5"/>

        <gallery />

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import UploadModel from './components/UploadModel';
import Gallery from './components/Gallery';

export default {
  name: 'App',
  components: {
    UploadModel,
    Gallery
  }
}
</script>
