<template>
  <div class="h-title">
    <a class="header-area" href="#">
      <img class="header-pic" src="@/assets/img/logo-head.png" />
    </a>
    <h1 class="navv">
      <div style="color: #154863 ;">Quiz, Share, Excel,</div>
      <div style="margin-left: 10px; color: #f7722f;">AND CatchUp!</div>
    </h1>
    <div class="header-links">
      <i
        class="fa-solid fa-earth-americas"
        style="color: black; font-size: 20px; margin-right: 20px; cursor: pointer;"
      ></i>
      <a class="signin" href="#">Sign In</a>
      <a class="signup" href="#">Sign Up</a>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  color: #333;
  font-size: 30px;
  margin: 0;
}
a {
  text-decoration: none;
}
.h-title {
  position: sticky;
  display: flex;
  top: 0px;
  height: 80px;
  z-index: 9999;
  background-color: white;
  /* border-bottom: 1px #777 solid; */
  box-shadow: 0 1px 7px rgb(255 255 255 / 50%);
  color: white;
}
.header-area {
  display: flex;
  position: absolute;
  align-items: center;
  margin: 10px;
  color: #e5e38d;
  font-size: 24px;
  font-weight: bolder;
  font-family: "Montserrat";
}
.header-pic {
  /* width: 60px;
  height: 60px;
  background-image: url("../assets/img/logo-head.png");
  background-size: contain;
  background-repeat: no-repeat; */
  height: 60px;
}
.header-links {
  position: absolute;
  top: 30px;
  right: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signin {
  font-size: 16px;
  color: #154863;
  margin-right: 20px;
  font-weight: bold;
}
.signup {
  font-size: 16px;
  color: white;
  background-color: #154863;
  padding: 4px 15px;
  border-radius: 5px;
  /* border-color: #e5e38d; */
  font-weight: bold;
}
.navv {
  margin: 10px auto 10px;
  display: flex;
  justify-content: center;
  width: 900px;
  padding: 10px 0px;
  /* border-top: 1px #ddd solid; */
}
.navv a {
  font-size: 18px;
  padding: 0px 20px;
  font-weight: bold;
  color: white;
}
</style>
