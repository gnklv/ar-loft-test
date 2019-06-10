<template>
  <v-layout column>
    <v-tabs show-arrows>
      <v-tab
        v-for="category in categoriesValues"
        :key="`tab-${category.key}`"
        :href="`#tab-${category.key}`"
      >
        {{ category.name }}
      </v-tab>

      <v-tabs-items>
        <v-tab-item
          v-for="category in categoriesValues"
          :key="`tab-item-${category.key}`"
          :value="`tab-${category.key}`"
        >
          <v-layout row wrap>
            <v-flex
              v-for="model in filteredModels(category.key)"
              :key="model.key"
              xs12
              sm6
              md3
            >
              <a class="card pa-2" rel="ar" :href="model.usdz.url">
                <img style="display: none;" src="" alt="" />
                <v-card flat>
                  <div
                    class="card__preview"
                    :style="{
                      backgroundImage: `url(${model.preview ? model.preview.url : ''})`
                    }"
                  >
                    <div v-if="!model.preview" class="card__preview-stub">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 500 500"
                        style="fill: #e5e5e5"
                      >
                        <path
                          d="M215.433 300.489v-2.563c0-5.45-3.017-8.118-8.558-8.118l-4.506.005c-5.557 0-8.573 2.663-8.573 8.113v8.02h34.66l-.005-5.449-13.018-.008zm-4.953.007h-11.732v-2.577c0-1.731.788-2.669 3.269-2.669h5.201c2.469 0 3.263.938 3.263 2.669v2.577zM214.344 279.726c-.005-2.469 1.195-3.566 4.408-3.566h5.442c2.816 0 3.376-.198 4.257-.493v-5.542c-1.288.552-2.525.595-4.205.605l-5.338-.011c-3.621.011-6.245.891-7.385 3.616-1.135-2.421-3.468-3.567-7.025-3.567h-2.732c-5.337 0-7.969 2.424-7.969 8.063v8.229l34.655-.011.005-5.444h-14.112v-1.879zm-4.948 1.878l-10.648.004v-2.618c0-1.926 1.089-2.774 3.565-2.768h3.414c2.779 0 3.669 1.232 3.675 3.251l-.006 2.131zM220.133 251.092h-18.011c-5.55 0-8.714 2.924-8.714 8.263-.009 5.354 3.164 8.276 8.714 8.276h18.011c5.555 0 8.721-2.923 8.715-8.276 0-5.339-3.16-8.263-8.715-8.263zm.352 11.089h-18.712c-2.484 0-3.413-1.089-3.422-2.826.009-1.718.938-2.821 3.414-2.817l18.72-.004c2.468.004 3.412 1.104 3.412 2.83 0 1.728-.934 2.817-3.412 2.817zM220.133 232.196c-9.891 0-11.235 10.654-18.368 10.654-2.476-.01-3.414-.998-3.414-2.725.009-1.738.949-2.726 3.414-2.726h1.437v-5.15h-1.08c-5.55 0-8.723 2.715-8.723 8.021.009 5.305 3.173 8.02 8.723 8.02 9.889 0 11.23-10.643 18.363-10.643 2.478 0 3.36 1.084 3.364 2.821-.004 1.728-.896 2.826-3.364 2.826h-2.484v5.141h2.135c5.542 0 8.712-2.768 8.718-8.111 0-5.36-3.166-8.128-8.721-8.128zM193.796 213.867v16.828l4.952-.01v-5.681h29.703l.005-5.45h-29.708v-5.697zM202.122 211.945h18.011c5.555 0 8.715-2.914 8.715-8.262 0-5.343-3.16-8.257-8.715-8.257l-18.016-.01c-5.545.01-8.718 2.934-8.709 8.267 0 5.348 3.164 8.262 8.714 8.262zm-.357-11.079h18.725c2.464 0 3.408 1.095 3.413 2.817-.005 1.729-.949 2.821-3.417 2.832h-18.712c-2.484 0-3.413-1.103-3.422-2.832-.001-1.732.948-2.817 3.413-2.817zM253.626 225.116h-8.96v-29.69l-5.45-.01v34.65h14.42zM263.815 230.865c5.333 0 8.266-3.161 8.266-8.718l-.008-18.014c.008-5.547-2.925-8.708-8.269-8.717-5.341 0-8.263 3.17-8.263 8.717v18.02c.001 5.542 2.917 8.712 8.274 8.712zm-.01-30.489c1.732 0 2.828.94 2.828 3.403v18.726c0 2.464-1.096 3.408-2.828 3.408-1.729 0-2.822-.944-2.811-3.412l-.012-18.722c0-2.463 1.086-3.411 2.823-3.403zM281.003 215.764h7.033l.009-4.951h-7.042v-10.437h8.962v-4.96l-14.395.01-.007 34.64h5.44zM296.689 230.066h5.446l-.011-29.2h5.693v-5.44l-16.82-.01-.005 5.45 5.697.005zM239.216 237.347l.009 68.599h68.592l.008-68.599h-68.609zm30.897 34.206l-25.931 25.931-.008-51.87 25.939 25.939zm-22.241-29.251h51.494l-25.749 25.747-25.745-25.747zm25.746 32.756l25.931 25.931h-51.864l25.933-25.931zm3.504-3.504l25.745-25.744-.006 51.484-25.739-25.74z"
                        />
                      </svg>
                    </div>
                  </div>
                  <v-layout justify-center pa-2>
                    <h3 class="subheading">{{ model.name }}</h3>
                  </v-layout>
                </v-card>
              </a>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";

export default {
  name: "PageHome",
  mixins: [asyncDataStatus],
  computed: {
    ...mapState({
      categories: state => state.categories,
      models: state => state.models
    }),
    categoriesValues() {
      return Object.values(this.categories);
    }
  },
  async created() {
    const categories = await this.fetchAllCategories();
    await Promise.all(
      categories.map(category => {
        if (category.models) {
          return this.fetchModels({ ids: Object.keys(category.models) });
        }
        return false;
      })
    );
    this.asyncDataStatus_fetched();
  },
  methods: {
    ...mapActions("categories", ["fetchAllCategories"]),
    ...mapActions("models", ["fetchModels"]),
    filteredModels(categoryId) {
      return Object.values(this.models).filter(
        model => model.categoryId === categoryId
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.subheading {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card {
  display: block;
  text-decoration: none;
}

.card__preview {
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &::before {
    content: "";
    display: block;
    padding-top: 75%;
  }

  &-stub {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border: 3px dashed #e5e5e5;
    border-radius: 5px;
  }
}
</style>
