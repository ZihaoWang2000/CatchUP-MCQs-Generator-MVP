<template>
  <div class="bottom">
    <div v-for="item in items" :key="item.id" class="partition-area">
      <div class="partition-title">{{ item.name }}</div>
      <ul>
        <li
          v-for="(itemValue, index) in item.value"
          :key="index"
          class="partition-item"
        >
          <a href="#">{{ itemValue }}</a>
        </li>
      </ul>
    </div>
    <div class="icon-container">
      <i class="fa-brands fa-square-x-twitter icon"></i>
      <i class="fa-brands fa-square-facebook icon"></i>
      <i class="fa-brands fa-linkedin icon"></i>
    </div>
    <img class="foot-pic" src="@/assets/img/logo_big.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Member Area",
          value: ["Sign In", "Sign Up", "Forget Password?"],
        },
        {
          id: 2,
          name: "CatchUp",
          value: ["Team", "Vision", "Mission"],
        },
        {
          id: 3,
          name: "Service",
          value: ["Terms and Privacy", "Developers API"],
        },
        {
          id: 4,
          name: "Support",
          value: ["Help"],
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

.bottom {
  background-color: #154863;
  display: flex;
  padding: 50px 100px 50px 100px;
  flex-wrap: wrap;
  height: auto;
  position: relative;
  font-weight: bold;
}

.partition-area {
  margin: 0 100px 100px 0;
}

.partition-title {
  color: #f7722f;
  text-align: left;
}

.partition-item {
  list-style-type: none;
  text-align: left;
  margin-top: 10px;
}

a {
  color: white;
  text-decoration: none;
}

.icon {
  position: relative;
  left: 50px;
  top: 150px;
  color: #f7722f;
  font-size: 40px;
  margin-right: 20px;
}

.foot-pic {
  position: absolute;
  height: 300px;
  /* margin-left: 50px; */
  right: 50px;
  bottom: 0;
}
</style>
