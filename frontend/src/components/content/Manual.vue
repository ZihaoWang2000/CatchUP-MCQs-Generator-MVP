<template>
  <i class="fa-brands fa-google-drive link-icon"></i>
  <i class="fa-brands fa-dropbox link-icon"></i>
  <i class="fa-solid fa-link link-icon"></i>
  <h2 class="manual-title">
    How to Convert Files to MCQs
  </h2>
  <div class="process">
    <div class="process-step">
      <div class="step-number">1</div>
      <div class="step-text">
        Upload Word, PowerPoint, PDF, or other file you wish to study.
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">2</div>
      <div class="step-text">
        Our free MCQ generator will provide personalized questions in seconds.
      </div>
    </div>
    <div
      class="
    process-step"
    >
      <div class="step-number">3</div>
      <div class="step-text">
        You can play with the MCQs either online or download them.
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-icon {
  font-size: 30px;
  margin: 10px 50px 10px 50px;
}

.manual-title {
  margin: 70px 0 20px 0;
  font-weight: bold;
}

.process {
  display: flex;
  padding: 0 50px 0 50px;
}

.process-step {
  display: flex;
  margin: 20px;
  /* width: 30%; */
}

.step-number {
  display: flex;
  color: white;
  width: 25px;
  height: 25px;
  background-color: #154863;
  border-radius: 100px;
  margin-top: 5px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.step-text {
  text-align: left;
  word-spacing: 4px;
  font-size: 20px;
  width: 90%;
  margin-left: 10px;
}

i {
  cursor: pointer;
}
</style>
