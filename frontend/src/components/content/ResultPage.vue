<!-- ResultPage.vue -->
<template>
  <div class="main-area">
    <h1>MCQs Generated from {{ fileName }}</h1>
    <div v-for="item in serverData" :key="item.id" class="big-question">
      <div class="question-number">Question {{ item.id }}</div>
      <div class="question-area">
        <div class="question-describe">{{ item.question }}</div>
        <div class="choices">
          <ul>
            <li
              v-for="(choice, index) in item.choices"
              :key="index"
              class="partition-item"
            >
              <a href="#">{{ choice }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="big-answer">
      <div class="cartoon">
        <img src="@/assets/img/fox2.png" class="fox" />
      </div>
      <div class="answer-area">
        Complete the exercise! Well done!
        <div class="answers">
          Answers:
          <div class="answer-items">
            <div v-for="item in serverData" :key="item.id" class="answer-item">
              {{ item.id }}: {{ item.answer }}
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center;">
          Want another set?
          <label for="fileInput" class="uploadfile-button">
            <i class="fa-solid fa-plus" style="color: white;"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            ref="fileInput"
            style="display: none"
            accept=".pdf"
            @change="handleFileUpload"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FileUpload from "./FileUpload.vue";

export default {
  data() {
    return {
      serverData: "",
      fileName: "",
    };
  },
  mounted() {
    // Load server data when mounting
    this.fetchServerData();
  },
  methods: {
    async fetchServerData() {
      try {
        const response = await axios.get("http://localhost:3000/getData");
        this.serverData = response.data.data;
        this.fileName = response.data.filename;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async handleFileUpload() {
      const fileInput = this.$refs.fileInput;
      const selectedFile = fileInput.files[0];

      if (selectedFile) {
        this.$router.push({ name: "Wait" });
        await axios.post("http://localhost:3000/clearData");

        try {
          let formData = new FormData();
          formData.append("file", selectedFile);

          // Make a POST request using Axios
          const response = await axios.post(
            "http://localhost:3000/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          // Clear the file input to allow selecting the same file again
          fileInput.value = "";
        } catch (error) {
          console.error(error.response.data);
        }
      } else {
        console.warn("Select a pdf file");
      }
    },
  },
  components: {
    FileUpload,
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  margin-left: 50px;
  display: flex;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: black;
  text-decoration: none;
}
.main-area {
  background-color: rgba(247, 114, 47, 0.08);
  padding-top: 30px;
  padding-bottom: 50px;
  /* padding-bottom: 10px; */
  /* padding: 0 100px 0 100px; */
}

.big-question {
  margin-bottom: 30px;
  padding: 0 100px 0 50px;
}

.question-number {
  width: 15%;
  padding: 10px 20px 10px 10px;
  border-radius: 0 100px 100px 0;
  background-color: #154863;
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
}
.question-area {
  width: 100%;
  text-align: left;
  background-color: #fff6d9;
  border: solid 5px white;
  padding: 30px 0px 30px 30px;
}

.question-describe {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.choices {
  /* font-weight: 100; */
  line-height: 2;
  font-size: 18px;
}

.fox {
  height: 250px;
  margin-right: 50px;
}

.big-answer {
  margin-left: 50px;
  display: flex;
  margin-top: 100px;
}

.answer-area {
  font-size: 20px;
  text-align: left;
  font-weight: bold;
}

.answers {
  margin: 20px 0 20px 0;
  width: 100%;
  text-align: left;
  background-color: #fff6d9;
  border: solid 5px white;
  padding: 30px 0px 30px 30px;
}

.answer-items {
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
}

.answer-item {
  margin-right: 15px;
}

.uploadfile-button {
  background-color: #f7722f;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
}
</style>
