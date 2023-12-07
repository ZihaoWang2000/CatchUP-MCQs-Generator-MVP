<template>
  <div class="intro-area">
    <div v-for="item in items" :key="item.id" class="intro-item">
      <div class="intro-title">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        {{ item.name }}
      </div>
      <div class="intro-body">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Prepare your exam",
          value:
            "CatchUp helps you deconstruct complex concepts, clarify key items, and prepare for any subject. It is an ideal tool to be ready for exercise, quizzes, and exams.",
          icon: "#icon-shu1",
        },
        {
          id: 2,
          name: "Start a free trial",
          value:
            "With a free trial of our online MCQs generator, you can access limitless questions for free. You can also upload unlimited sizes and number of files at the same time.",
          icon: "#icon-mubiao",
        },
        {
          id: 3,
          name: "High quality",
          value:
            "Experience it yourself! Additionally, to ensure the highest quality and accuracy of MCQs, we have partnered with the smartest AI providers on the market.",
          icon: "#icon-wenda1",
        },
        {
          id: 4,
          name: "Encrypted files",
          value:
            "Ensuring document security is our priority. All uploaded documents are encrypted using advanced encryption technology. We also automatically destroy all files from the servers.",
          icon: "#icon-anquan",
        },
        {
          id: 5,
          name: "Record your learning progress",
          value:
            "Every effort and progress in the learning process deserve to be recorded. We retain your performance to review and consolidate areas of weakness.",
          icon: "#icon-jiasutisheng",
        },
        {
          id: 6,
          name: "Use anytime, anywhere",
          value:
            "With an internet connection, you can use the free MCQs generation function anytime from anywhere. CatchUp works entirely on the cloud.",
          icon: "#icon-shangsheng",
        },
      ],
    };
  },
};
</script>

<style scoped>
.intro-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  /* padding: 10%; */
}

.intro-item {
  margin: 0 50px 70px 50px;
  width: 25%;
}

.intro-title {
  display: flex;
  /* width: 75%; */
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.icon {
  width: 45px;
  height: 30px;
  /* -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%); */
}

.intro-body {
  text-align: left;
  line-height: 1.5;
}
</style>
