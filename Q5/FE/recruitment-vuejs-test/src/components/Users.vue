<template>
  <div class="main">
    <div class="main-title fw-bold fs-4">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div
      class="wrapper row container-fluid justify-content-center align-items-center"
    >
      <div
        v-for="user in users"
        :key="user.name"
        class="card mx-1 my-2 row p-0"
      >
        <div class="body-card p-1 pt-2">
          <div class="title">Name</div>
          <div class="name fw-bolder fs-5 mb-2">{{ user.name }}</div>
          <div
            class="wrapper-card row justify-content-between align-items-center"
          >
            <div class="col-5">
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div class="col-4">
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div class="col-3">
              <div class="title">Website</div>
              <div class="website fw-bolder">
                {{ user.website }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
        this.setCount(response.data.length);
      })
      .catch((error) => {
        this.loading = false;
        console.log(error);
      });
  },
  methods: {
    setData(data) {
      this.$store.dispatch("setDatas", data);
    },
    setCount(data) {
      this.$store.dispatch("setCounts", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
.card {
  width: 45vw;
  max-width: 50vw;
  height: 100%;
}
.website {
  color: #83dd8b;
}
.title {
  color: #dfdfe4;
}
.name {
  color: #646464;
}
</style>
