<template>
  <header-area></header-area>
  <waiting-page></waiting-page>
  <about-us></about-us>
</template>

<script>
import WaitingPage from "../components/content/WaitingPage.vue";
import AboutUs from "../components/content/AboutUs.vue";
import HeaderArea from "../components/content/HeaderArea.vue";

export default {
  components: {
    WaitingPage,
    AboutUs,
    HeaderArea,
  },
};
</script>
