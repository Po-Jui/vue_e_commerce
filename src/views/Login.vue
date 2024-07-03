<template>
  <div class="container custom-margin-top">
    <div class="card mb-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            alt="Trendy Pants and Shoes"
            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
          />
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">
            <form @submit.prevent="signIn">
              <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
              <div class="mb-2">
                <label for="inputEmail" class="sr-only">請輸入Email</label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                  v-model="user.username"
                />
              </div>
              <div class="mb-2">
                <label for="inputPassword" class="sr-only">請輸入密碼</label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                  v-model="user.password"
                />
              </div>
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      checked
                    />
                    <label class="form-check-label" for="form2Example31"> 記住我 </label>
                  </div>
                </div>
                <div class="col">
                  <a href="#!">忘記密碼?</a>
                </div>
              </div>
              <div class="text-end mt-4">
                <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      console.log(api);
      this.$http.post(api, this.user).then((res) => {
        console.log(res);
        if (res.data.success) {
          const token = res.data.token;
          const expired = res.data.expired;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/dashboard/products");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~mdb-ui-kit/css/mdb.min.css";
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.custom-margin-top {
  margin-top: 80px; /* Adjust the value as needed */
}
.custom-bg {
  background-image: url("https://example.com/your-image.jpg");
  background-size: cover;
  background-position: center;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
