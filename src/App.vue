<template>
  <main class="wrapper">
    <the-header />

    <the-menu />

    <div class="wrapper__content">
      <router-view />
    </div>

    <the-footer />
  </main>
</template>

<script>
import { defineComponent } from 'vue';

import TheHeader from './components/TheHeader/index.vue'
import TheFooter from './components/TheFooter/index.vue'
import TheMenu from "./components/TheMenu/index.vue";

export default defineComponent({
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
    TheMenu
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  font-family: 'Roboto', sans-serif;
}

.wrapper {
  &__content {
    padding-top: 90px;
    padding-bottom: 90px;
    min-height: calc(100vh - 81px - 60px - 110px);
  }
}

.container {
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
}
</style>
