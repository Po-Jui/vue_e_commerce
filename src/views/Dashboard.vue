<template>
  <navbar></navbar>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
export default {
  name: "Dashboard",
  components: {
    navbar,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // console.log(api);
    this.$http.post(api, this.user).then((res) => {
      console.log(res);
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
