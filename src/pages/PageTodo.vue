<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>
      <q-item
        v-for="(task) in tasks"
        :key="task.id"
        @click="task.completed =!task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed"/>
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strikethrough' : task.completed}"
          >{{ task.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                name="event"
                size="18px"
                class="q-mr-xs"
              />
            </div>

            <div class="column">
              <q-item-label
                class="row justify-end"
                caption>{{ task.dueDate }}
              </q-item-label>
              <q-item-label
                caption
                class="row justify-end">
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "go to shopping",
          completed: false,
          dueDate: '2020/09/12',
          dueTime: '8:30'
        },
        {
          id: 2,
          name: "get bananas",
          completed: false,
          dueDate: '2020/09/13',
          dueTime: '14:30'
        },
        {
          id: 3,
          name: "get apples",
          completed: false,
          dueDate: '2020/09/14',
          dueTime: '16:30'
        },

      ]
    }
  }

}

</script>

<style>

</style>
