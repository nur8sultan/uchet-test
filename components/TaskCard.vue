<template>
  <div class="col col-lg-3">
    <div
      v-if="!isStateEdit && !isNew"
      class="card mt-2 mb-2 u-card"
    >
      <div class="card-body u-card__body">
        <h5 class="card-title u-card__title">{{ task.title }}</h5>
        <p class="card-text u-card__text">{{ task.text }}</p>
        <p class="card-text u-card__text">{{ task.date }}</p>
        <button
          v-if="task.status === 'active'"
          class="btn btn-success"
          @click="doneTask"
        >
          Done
        </button>
        <button
          v-if="task.status === 'active'"
          class="btn btn-warning"
          @click="isStateEdit = true"
        >
          Edit
        </button>
        <button
          v-if="task.status !== 'deleted'"
          class="btn btn-danger"
          @click="removeTask"
        >
          Remove
        </button>
      </div>
    </div>

    <div
      v-if="isStateEdit || isNew"
      class="card mt-2 mb-2 u-card"
    >
      <div class="card-body u-card__body">
        <input
          v-model="form.title"
          class="u-card__input"
          type="text"
          placeholder="Task title"
        >
        <textarea
          v-model="form.text"
          class="u-card__textarea"
          cols="30"
          rows="3"
          placeholder="Task text"
        ></textarea>
        <input
          v-model="form.date"
          class="u-card__input"
          type="date"
          placeholder="due to"
        >
        <div class="row">
          <div class="col">
            <button
              class="btn btn-success"
              @click="editTask"
            >
              Save
            </button>
            <button
              class="btn btn-danger"
              @click="cancelEdit"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: Object,
    isNew: Boolean,
  },
  data() {
    return {
      isStateEdit: false,
      form: {},
    }
  },

  mounted() {
    if (this.task) this.form = {...this.task};
  },

  methods: {
    editTask() {
      if (this.isNew) {
        this.form.status = 'active';
        this.form.isNew = 1;
      }
      this.$store.dispatch('editTask', this.form);
      this.isStateEdit = false
      this.$emit('added');
    },
    cancelEdit() {
      this.form = {...this.task};
      this.isStateEdit = false;

      if (this.isNew) this.$emit('added');
    },
    doneTask() {
      this.form = {...this.form, ...{status: 'done'}};
      this.$store.dispatch('editTask', this.form);
    },
    removeTask() {
      this.form = {...this.form, ...{status: 'deleted'}};
      debugger;
      this.$store.dispatch('editTask', this.form);
    },
  },
}
</script>

<style scoped>

</style>
