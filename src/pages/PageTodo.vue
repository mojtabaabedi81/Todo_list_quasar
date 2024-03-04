<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>
      <TaskItem
        v-for="(task,index) in tasks"
        :key="index"
        :task="task"
        :id="index"
      ></TaskItem>
    </q-list>
  </q-page>
</template>

<script>
import index, { mapGetters } from 'vuex';
import TaskItem from "components/Tasks/TaskItem.vue";

export default {
  computed: {
    index() {
      return index
    },
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    TaskItem
  }
}
</script>


<style>

</style>
