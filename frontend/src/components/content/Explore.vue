<template>
  <div class="explore-area">
    <h2>
      Explore Our Smart Learning Solution
    </h2>
    <div class="main-body">
      <div class="instruction">
        <div class="instruction-text">
          <p style="color: #f7722f; font-weight: bold;">
            Be ready for the exam!
          </p>
          <p>Upload and start your learning journey.</p>
        </div>
        <div class="cartoon">
          <img src="@/assets/img/fox.png" class="fox" />
        </div>
        <div class="instruction-items">
          <div v-for="item in items" :key="item.id" class="instruction-item">
            <i
              class="fa-solid fa-check"
              style="color: #f7722f; font-weight: bold; margin-right: 10px;"
            ></i>
            <div class="in-item">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="demo">
        <img src="@/assets/img/demo.png" class="demo-pic" />
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
          name: "Fast",
        },
        {
          id: 2,
          name: "Accurate",
        },
        {
          id: 3,
          name: "Smart",
        },
      ],
    };
  },
};
</script>

<style scoped>
.explore-area {
  margin-top: 20px;
  font-weight: bold;
}
.main-body {
  display: flex;
  padding: 50px 10% 50px 10%;
}
.instruction {
  width: 40%;
  color: #154863;
}

.instruction-text {
  font-size: 20px;
}

.fox {
  height: 250px;
}
.instruction-items {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.instruction-item {
  display: flex;
  padding: 10px;
}

.demo-pic {
  height: 450px;
}
</style>
