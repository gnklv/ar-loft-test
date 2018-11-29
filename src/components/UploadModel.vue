<template>
	<div>
		<h3 class="headline mb-2">
			Upload a 3D-model
		</h3>
		<v-btn
			v-if="!uploading"
			@click.native="selectFile" 
			color="info"
		>
			Upload
			<v-icon right aria-hidden="true">backup</v-icon>
		</v-btn>
		<input
			id="files"
			type="file"
			name="file"
			ref="uploadInput"
			accept=".usdz*"
			:multiple="false"
			@change="detectFiles($event)"
		/>
		<v-progress-circular
			v-if="uploading"
			:size="100"
			:width="15"
			:rotate="360"
			:value="progressUpload"
			color="primary"
		>{{ progressUpload }} %</v-progress-circular>

		<v-alert
      :value="uploadEnd"
			@input="setUploadEnd(false)"
      dismissible
      type="success"
			transition="fade-transition"
			class="alert"
    >
			{{ this.fileName }} was successfully uploaded!
    </v-alert>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import firebase from 'firebase/app';

export default {
	computed: {
		...mapGetters({
			progressUpload: 'getProgressUpload',
			fileName: 'getNameNewModel',
			uploading: 'getUploading',
			uploadEnd: 'getUploadEnd'
		})
	},
	methods: {
		...mapMutations(['setUploadEnd']),
		...mapActions(['uploadModel']),
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map(x => {
        this.uploadModel(fileList[x]);
      });
    }
  },
}
</script>

<style lang="scss">
.progress-bar {
  margin: 10px 0;
}

input[type="file"] {
  position: absolute;
  clip: rect(0,0,0,0);
}

.alert {
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>