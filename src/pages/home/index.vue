<template>
  <div>
    <upload-model class="mb-5"/>
    <gallery />
  </div>
</template>

<script>
import UploadModel from '@/components/UploadModel';
import Gallery from '@/components/Gallery';

export default {
  name: 'Home',
  components: {
    UploadModel,
    Gallery
  }
}
</script>
