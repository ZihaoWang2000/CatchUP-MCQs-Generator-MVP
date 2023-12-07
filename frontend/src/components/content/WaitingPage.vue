<!-- WaitingPage.vue -->
<template>
  <div class="main-area">
    <h1>Loading...</h1>
    <p>The file is being processed, please wait a moment...</p>
    <div class="fa-3x">
      <i class="fa-solid fa-cog fa-spin"></i>
    </div>
    <div v-if="resultsLoaded">
      <p>Done!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      resultsLoaded: false,
    };
  },
  created() {
    this.checkResults();
  },
  methods: {
    async checkResults() {
      try {
        // 发起请求检查结果
        const response = await axios.get("http://localhost:3000/checkResults");

        if (response.data.resultsReady) {
          this.resultsLoaded = true;
          this.$router.push({ name: "MCQ" });
        } else {
          setTimeout(this.checkResults, 1000); // Recheck after 1 second
        }
      } catch (error) {
        console.error("Error when checking:", error.message);
        setTimeout(this.checkResults, 1000); // Recheck after 1 second
      }
    },
  },
};
</script>

<style scoped>
.main-area {
  display: flex;
  flex-direction: column;
  background-color: rgba(247, 114, 47, 0.08);
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  /* padding: 0 100px 0 100px; */
}

p {
  font-size: 20px;
}

i {
  margin-top: 20px;
}
</style>
