<template>
  <header-area></header-area>
  <result-page></result-page>
  <about-us></about-us>
</template>

<script>
import ResultPage from "../components/content/ResultPage.vue";
import AboutUs from "../components/content/AboutUs.vue";
import HeaderArea from "../components/content/HeaderArea.vue";

export default {
  components: {
    ResultPage,
    AboutUs,
    HeaderArea,
  },
};
</script>
