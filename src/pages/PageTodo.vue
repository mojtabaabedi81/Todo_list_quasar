<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>
      <task
        v-for="(task,key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
      <!--      <q-item-->
      <!--        v-for="(task,key) in tasks"-->
      <!--        :key="key"-->
      <!--        @click="task.completed =!task.completed"-->
      <!--        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"-->
      <!--        clickable-->
      <!--        v-ripple>-->
      <!--        <q-item-section side top>-->
      <!--          <q-checkbox v-model="task.completed"/>-->
      <!--        </q-item-section>-->

      <!--        <q-item-section>-->
      <!--          <q-item-label-->
      <!--            :class="{'text-strikethrough' : task.-->
      <!--            completed}"-->
      <!--          >{{ task.name }} {{key}}-->
      <!--          </q-item-label>-->
      <!--        </q-item-section>-->
      <!--        <q-item-section side>-->
      <!--          <div class="row">-->
      <!--            <div class="column justify-center">-->
      <!--              <q-icon-->
      <!--                name="event"-->
      <!--                size="18px"-->
      <!--                class="q-mr-xs"-->
      <!--              />-->
      <!--            </div>-->

      <!--            <div class="column">-->
      <!--              <q-item-label-->
      <!--                class="row justify-end"-->
      <!--                caption>{{ task.dueDate }}-->
      <!--              </q-item-label>-->
      <!--              <q-item-label-->
      <!--                caption-->
      <!--                class="row justify-end">-->
      <!--                <small>{{ task.dueTime }}</small>-->
      <!--              </q-item-label>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </q-item-section>-->
      <!--      </q-item>-->
    </q-list>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require('components/Tasks/Task.vue').default
  }
}

</script>

<style>

</style>
