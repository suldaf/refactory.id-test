<template>
  <div id="app" class="row">
    <div class="col-12">
      <Nav />
    </div>
    <div class="container-fluid row">
      <div class="col-4 p-5 ms-3">
        <div class="row">
          <Info />
        </div>
        <div class="row">
          <Datepicker v-model="picker" :inline="true" />
        </div>
      </div>
      <div class="col-1 line p-0"></div>
      <div class="col-7 ms-3 p-5">
        <div class="row">
          <p class="fw-bold fs-2" style="color: #525c77">Task For Today</p>
        </div>
        <div class="row mb-5">
          <div class="col-3">
            <button
              class="btn btn-primary d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span class="fs-3 me-2">+</span> Create New
            </button>
          </div>
          <div
            class="col-9 input d-flex justify-content-center align-items-center"
          >
            <input
              type="text"
              style="border: none; width: 95%; color: #0542d0"
              class="text-center"
              placeholder="Cari"
            />
            <button class="btn">
              <span><i class="bi bi-search"></i></span>
            </button>
          </div>
        </div>
        <div class="row">
          <CardTodo />
        </div>
      </div>
    </div>
    <ModalForm />
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="fill title"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Description</label
                >
                <textarea
                  name="description"
                  class="form-control"
                  cols="20"
                  rows="5"
                  placeholder="fill description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Choose Date</label
                >
                <Datepicker v-model="formDate" :inline="true" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn text-primary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">Create Task</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Info from "@/components/Info.vue";
import Datepicker from "vuejs-datepicker";
import CardTodo from "@/components/CardTodo.vue";
import ModalForm from "@/components/ModalForm.vue";
export default {
  name: "App",
  components: {
    Nav,
    Info,
    Datepicker,
    CardTodo,
    ModalForm,
  },
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      formDate: new Date().toISOString().substr(0, 10),
    };
  },
};
</script>

<style>
.input {
  border-radius: 1.25rem;
  border: 1px solid #0542d0;
}
.btn-primary {
  border-radius: 1.25rem;
  background-color: #0542d0;
}
.rounded-circle {
  width: 11% !important;
}
.line {
  border-right: 2px solid #eef3fd;
  width: 2% !important;
}
.vdp-datepicker__calendar {
  border-radius: 1.25rem;
  border: none !important;
}
.vdp-datepicker__calendar .cell.selected {
  border-radius: 50%;
  background-color: #0542d0 !important;
  color: #ffff;
}
.vdp-datepicker__calendar .cell.selected:hover {
  background-color: #0542d0 !important;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #0542d0 !important;
  border-radius: 50%;
}
</style>
