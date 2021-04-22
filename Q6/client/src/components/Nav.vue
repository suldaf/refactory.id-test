<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-4 text-light ms-3" href="#">Logo</a>

      <div class="row justify-content-end align-items-center">
        <img
          src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
          alt="Avatar"
          height="50"
          class="rounded-circle col-1"
        />
        <span class="fs-5 text-light col-3">Samsul Arifin</span>
        <button class="col-1 btn p-0">
          <i class="bi bi-gear text-light"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #0542d0;
}
</style>
