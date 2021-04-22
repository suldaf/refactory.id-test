<template>
  <div
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
                v-model="title"
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
                v-model="description"
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
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      title: "",
      description: "",
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
