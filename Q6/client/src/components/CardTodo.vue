<template>
  <div class="card" style="width: 100%">
    <div class="card-body">
      <div class="row">
        <h5 class="card-title col-9">Daily Stand Up</h5>
        <p class="col-3 text-danger text-center">
          <i class="bi bi-check2"> Complete</i>
        </p>
      </div>
      <div class="row">
        <div class="col-10">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="col-2 d-flex justify-content-end align-items-end">
          <div class="row justify-content-end align-items-center">
            <button class="col-5 btn p-0">
              <i class="bi bi-pencil-fill"></i>
            </button>
            <button class="col-5 btn p-0">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 1.25rem;
  border: none;
}
.text-danger {
  background-color: #feeaeb;
  border-radius: 0.5rem;
}
.col-1 {
  width: 5%;
  height: 5%;
}
.bi-pencil-fill,
.bi-trash-fill {
  color: #525c77;
}
</style>
