<template>
  <div class="row">
    <task-card
      v-for="(item, i) in tasks"
      :key="`active-item-${i}`"
      :task="item"
    />
  </div>
</template>

<script>
import TaskCard from "~/components/TaskCard";
import { mapGetters } from "vuex";

export default {
  name: "Deleted",
  components: {
    TaskCard,
  },
  computed: {
    ...mapGetters({
      tasks: 'deletedTasks',
    })
  },
}
</script>

<style scoped>

</style>
