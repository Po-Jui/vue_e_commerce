<template>
  <head>
    <title>404 Not Found</title>
  </head>
  <body>
    <nav class="navbar">
      <span>404 NOT FOUND 🚀</span>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <main>
      <div class="message">
        <strong>404</strong>
        <p class="title">LOOKS LIKE YOU ARE LOST IN THE SPACE</p>
        <p class="message-text">
          <!-- The page you are looking for might be removed or is temporally unavailable -->
          您正在尋找的頁面可能已被移除或暫時無法使用
        </p>
        <!-- <button class="button">GO BACK HOME</button> -->
        <router-link to="/dashboard/products" class="button">GO BACK HOME</router-link>
      </div>
    </main>

    <div class="box-astronaut">
      <img src="../assets/astronaut.svg" alt="" />
    </div>
  </body>
</template>

<script>
import "../styles/main.scss";
export default {
  name: "NotFound",
};
</script>
