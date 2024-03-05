<template>
  <q-item
    @click="toggleCompleted"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" @input="toggleCompleted"/>
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{'text-strikethrough' : task.completed}">
        {{ task.name }} {{ id }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"/>
        </div>

        <div class="column">
          <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
          <q-item-label caption class="row justify-end"><small>{{ task.dueTime }}</small></q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['task', 'id'],
  methods: {
    toggleCompleted() {
      this.$emit('toggle-completed', this.id);
    }
  }
}
</script>

<style>

</style>
