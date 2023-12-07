<template>
  <!-- 轮播图 -->
  <div class="wrap" id="box">
    <ul class="img-list" id="navs">
      <li><img src="~@/assets/img/curry6.jpg" alt="" /></li>
      <li><img src="~@/assets/img/curry3.jpg" alt="" /></li>
      <li><img src="~@/assets/img/banner1.png" alt="" /></li>
      <li><img src="~@/assets/img/curry1.jpg" alt="" /></li>
      <li><img src="~@/assets/img/curry4.jpg" alt="" /></li>
      <li><img src="~@/assets/img/banner2.png" alt="" /></li>
      <li><img src="~@/assets/img/curry6.jpg" alt="" /></li>
      <li><img src="~@/assets/img/curry3.jpg" alt="" /></li>
    </ul>
    <div ref="pointWrap" class="pointer">
      <a class="active" href="javascript:;" @click="tabPic(1)"></a>
      <a href="javascript:;" @click="tabPic(2)"></a>
      <a href="javascript:;" @click="tabPic(3)"></a>
      <a href="javascript:;" @click="tabPic(4)"></a>
      <a href="javascript:;" @click="tabPic(5)"></a>
      <a href="javascript:;" @click="tabPic(6)"></a>
    </div>
    <button class="btn-right btn" @click="rightNext">
      <i class="icon-right icon"> &gt;</i>
    </button>
    <button class="btn-left btn" @click="leftNext">
      <i class="icon-left icon"> &lt;</i>
    </button>
  </div>
</template>

<script>
import { onMounted, ref, unref } from "vue";
export default {
  setup() {
    const pointWrap = ref(null);
    let num = unref(ref(1));
    let leftLength = unref(ref(0));
    const rightNext = () => {
      // 手动往右
      num = num + 1;
      if (num > 6) {
        num = 1;
      }
      // console.log(box);
      const box = document.getElementById("navs");
      leftLength = -num * 100;
      box.style.left = `${leftLength}vw`;
      for (let i = 0; i < 6; i++) {
        if (i == num - 1) {
          pointWrap.value.children[i].className = "active";
        } else {
          pointWrap.value.children[i].className = "";
        }
      }
    };
    const leftNext = () => {
      // 手动往左
      num = num - 1;
      if (num < 1) {
        num = 6;
      }
      const box = document.getElementById("navs");
      leftLength = -num * 100;
      box.style.left = `${leftLength}vw`;
      for (let i = 0; i < 6; i++) {
        if (i == num - 1) {
          pointWrap.value.children[i].className = "active";
        } else {
          pointWrap.value.children[i].className = "";
        }
      }
    };
    const tabPic = (index) => {
      const box = document.getElementById("navs");
      leftLength = -index * 100;
      box.style.left = `${leftLength}vw`;
      for (let i = 0; i < 6; i++) {
        if (i == index - 1) {
          pointWrap.value.children[i].className = "active";
        } else {
          pointWrap.value.children[i].className = "";
        }
      }
    };
    onMounted(() => {
      // let leftLength = 0;
      // let i = 0;
      const box = document.getElementById("navs");
      const wrap = document.getElementsByClassName("wrap");
      let timer = null;
      // console.dir(wrap);
      // 把定时器功能做一个封装
      const swiper = () => {
        timer = setInterval(() => {
          num++;
          if (num > 6) {
            num = 1;
          }
          leftLength = -num * 100;
          box.style.left = `${leftLength}vw`;
          // console.dir(pointWrap.value.children[1]); //此函数输出元素的所有属性和方法
          // 注意pointWrap.value.children虽然类似于数组但不是数组，不能使用foreach函数
          // console.log(pointWrap.value.children);
          for (let i = 0; i < 6; i++) {
            if (i == num - 1) {
              pointWrap.value.children[i].className = "active";
            } else {
              pointWrap.value.children[i].className = "";
            }
          }
        }, 3000);
      };
      swiper();
      //鼠标移入清除定时器
      wrap[0].onmouseover = () => {
        clearInterval(timer);
      };
      //鼠标移出开启定时器
      wrap[0].onmouseout = () => {
        swiper();
      };
    });
    return {
      num,
      leftLength,
      pointWrap,

      rightNext,
      leftNext,
      tabPic,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
ul {
  /* 去除默认样式 */
  padding: 0;
  /*去除项目符号 (小点)*/
  list-style: none;
}
.wrap {
  position: relative;
  width: 100%;
  height: 600px;
  margin-top: -20px;
  overflow: hidden;
}
.img-list {
  position: absolute;
  width: 800vw;
  height: 600px;
  top: 0px;
  left: -100vw;
  margin-bottom: 0px;
}
.img-list li {
  /* position: absolute; */
  width: 100vw;
  height: 600px;
  float: left;
}
/* .img-list li:nth-child(1) {
  z-index: 1;
} */
.img-list img {
  width: 100%;
  height: 600px;
  opacity: 0.8;
}
.pointer {
  position: absolute;
  bottom: 30px;
  /* 设置水平居中 */
  left: 50%;
  margin-left: -117px;
  z-index: 999;
  width: 234px;
}
.pointer a {
  float: left;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0px 10px;
  /* 将背景颜色值设置到内容区，边框和内边距不在有背景颜色 */
  background-clip: content-box;
  border: 2px solid transparent;
}

.pointer a.active,
.pointer a:hover {
  background-color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
.btn {
  position: absolute;
  top: 50%;
  height: 55px;
  width: 45px;
  margin-top: -20px;
  border: none;
  font-size: 20px;
  font-weight: bold;
}
.btn-right {
  right: 0px;
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  background-color: rgba(0, 0, 0, 0.15);
}
.btn-left {
  left: 0px;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  background-color: rgba(0, 0, 0, 0.15);
}
.icon {
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
}
.icon-right {
  margin-right: -10px;
}
.icon-left {
  margin-left: -10px;
}
</style>
