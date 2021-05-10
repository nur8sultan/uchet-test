<template>
  <div>
    <div class="row">
      <div v-if="!isAdding" class="col-lg-3 col">
        <button
          class="btn btn-primary mt-2 mb-2"
          @click="isAdding = true"
        >
          Add +
        </button>
      </div>
      <task-card
        v-else
        :task="{}"
        is-new
        @added="isAdding = false"
      />
    </div>

    <div class="row">
      <task-card
        v-for="(item, i) in tasks"
        :key="`active-item-${i}`"
        :task="item"
      />
    </div>
  </div>
</template>

<script>
import TaskCard from "~/components/TaskCard";
import { mapGetters } from "vuex";

export default {
  components: {
    TaskCard,
  },

  data() {
    return {
      isAdding: false,
    }
  },

  computed: {
    ...mapGetters({
      tasks: 'activeTasks',
    })
  },
}
</script>

<style>
</style>
