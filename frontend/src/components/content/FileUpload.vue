<template>
  <div class="button-area">
    <label for="fileInput" class="button">
      <i
        class="fa fa-plus"
        aria-hidden="true"
        style="font-size: 15px; position: relative; right: 150px"
      ></i>
      Upload File
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
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async handleFileUpload() {
      // this.$router.push({ name: "Wait" });
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

          console.log("文件上传成功:", response.data);

          // Clear the file input to allow selecting the same file again
          fileInput.value = "";
        } catch (error) {
          console.error(error.response.data);
        }
      } else {
        console.warn("请选择文件");
      }
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  width: 500px;
  height: 70px;
  border-radius: 100px;
  background-color: #f7722f;
  color: white;
  border: 2px solid;
  cursor: pointer;
}

.button:hover {
  background-color: red;
}
</style>
