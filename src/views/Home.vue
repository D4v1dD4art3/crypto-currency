<template>
  <div>
    <ring-loader
      :loading="isLoading"
      :color="'#363CD7'"
      :size="100"
      :margin="'2px'"
    />
    <px-assets-table v-if="!isLoading" v-bind:assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "@/api.js";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false
    };
  },

  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>
