<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="font-size: 2.5rem">🐮🍺購物</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click.prevent="logout">登出</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <nav class="nav bg-dark">
    <a href="#" class="title">
      <div class="inner"><span class="title-text">🐮🍺購物</span></div>
      <div class="inner"><span class="title-text">🐮🍺購物</span></div>
      <div class="icon">
        <i class="bi bi-arrow-down"></i>
      </div>
    </a>

    <div class="dropdown">
      <ul>
        <li><a href="#">產品列表</a></li>
        <li><a href="#">線上預訂</a></li>
        <li><a @click.prevent="logout">登出</a></li>
        <li><a href="#">中文/English</a></li>
      </ul>
    </div>
  </nav> -->
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        console.log(res);
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #e3f2fd;
  a {
    text-decoration: none;
    color: white;
  }

  .title {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    font-size: 3rem;
    line-height: 1.2;
    height: 1.2em;
    position: relative;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    z-index: 2;
  }

  .inner {
    width: 450px;
    transform: translateY(0);
    transition: transform 0.6s;
  }
}

.icon {
  position: absolute;
  background-color: black;
  width: 48px;
  height: 48px;
  padding: 28px;
  left: 250px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  transition: transform 0.6s;
}

.dropdown {
  position: absolute;
  z-index: 1;
  top: 0;
  min-height: 310px;
  display: flex;
  align-items: end;
  width: 100%;
  padding-left: 20px;
  padding-bottom: 0px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.6s;
  transform: translateY(-100%);

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    transition: transform 0.5s, opacity 0.5s;
    transition-delay: 0.3s;
    transform: translateY(40px);
    opacity: 0;

    &:nth-of-type(1) {
      transition-delay: 0.25s;
    }

    &:nth-of-type(2) {
      transition-delay: 0.5s;
    }

    &:nth-of-type(3) {
      transition-delay: 0.75s;
    }

    &:nth-of-type(4) {
      transition-delay: 1s;
    }

    a {
      font-size: 2rem;
      text-decoration: none;
      color: rgb(0, 0, 0);
      line-height: 1.5;
      margin-bottom: 0.5rem;
      display: inline-block;
      transition: transform 0.5s;
      position: relative;
    }
  }
}

/* 選單特效 */

.dropdown li a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: rgb(0, 0, 0);
  transform: scale(0);
  transition: opacity 0.5s, transform 0.5s;
}

/* 選單特效 */

.nav:hover {
  .inner {
    transform: translateY(-100%);
  }

  .icon {
    transform: rotate(180deg);
    background-color: rgba(255, 255, 255, 0.2);
  }

  .dropdown {
    transform: translateY(0);
  }

  li {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 選單特效 下底線 */

.dropdown a:hover::after {
  transform: scale(1);
  opacity: 1;
}

/* 選單特效 下底線 */
</style>
