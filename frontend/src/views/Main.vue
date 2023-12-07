<template>
  <div id="div-main-wrap">
    <header-area></header-area>
    <!-- 主体 -->
    <div class="main-area">
      <div class="upload-area">
        <h2 class="main-subheader">
          Generate personalized multiple-choice questions (MCQs) in seconds.
        </h2>
        <div class="upload-button-area" href="#">
          <file-upload></file-upload>
        </div>
      </div>
      <manual></manual>
      <introduction></introduction>
      <explore></explore>
      <about-us></about-us>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import FileUpload from "../components/content/FileUpload.vue";
import Manual from "../components/content/Manual.vue";
import Introduction from "../components/content/Introduction.vue";
import AboutUs from "../components/content/AboutUs.vue";
import Explore from "../components/content/Explore.vue";
import HeaderArea from "../components/content/HeaderArea.vue";

export default {
  setup() {
    // onMounted(() => {
    //   // 监听全局点击事件
    //   window.addEventListener("click", clickA);
    //   // audio.value.play();
    //   console.log(audio.value);
    // });
    // 时间
    const hour = ref(0);
    const minute = ref(0);
    const second = ref(0);
    onMounted(() => {
      setInterval(() => {
        let date = new Date();
        hour.value = date.getHours();
        minute.value = date.getMinutes();
        second.value = date.getSeconds();
      }, 1000);
    });
    return {
      hour,
      minute,
      second,
    };
  },
  components: {
    FileUpload,
    Manual,
    Introduction,
    AboutUs,
    Explore,
    HeaderArea,
  },
};
</script>

<style scoped>
/* 去掉了scoped 其样式可以被其子组件使用 */

.main-area {
  width: 100vw;
  height: auto;
  padding: 60px 0 0;
  background-color: rgba(247, 114, 47, 0.08);
}
.main-subheader {
  width: 100%;
  margin: 50px 0 50px 0;
}
.upload-button-area {
  display: flex;
  height: 100px;
  font-size: 30px;
  justify-content: center;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 500px;
  height: 70px;
  border-radius: 100px;
  background-color: #154863;
  color: white;
  border: 2px solid;
  cursor: pointer;
}
</style>
