<template>
  <div>
    <popular-goods />

    <company-news />

    <our-partners />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import PopularGoods from "../../components/PopularGoods/index.vue";
import CompanyNews from "../../components/CompanyNews/index.vue";
import OurPartners from "../../components/OurPartners/index.vue";

export default defineComponent({
  name: 'HomePage',

  components: {
    PopularGoods,
    CompanyNews,
    OurPartners
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>
