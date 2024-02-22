<template>
  <q-page padding>
    <button style="position: absolute; right: 10px"
            @click="counter++"
    >
      {{ counter }}
    </button>

    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
    >

    <button @click="clearMessage">clear</button>
    <h5
      v-if="message.length"
      class="border-grey">{{ message }}</h5>
    <h6 v-else>No message entered 😒</h6>

    <hr>

    <p>Uppercase Message: {{ messageUppercase }}</p>
    <p>lowerCase message:{{ messageLowercase }} </p>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'i love vue js! much harder than you thought',
      counter: 0
    }
  },
  computed: {
    messageUppercase() {
      console.log('messageUppercase was fired')
      return this.message.toUpperCase() + this.counter
    },
    messageLowercase() {
      return this.message.toLowerCase()
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    },
    alertMessage() {
      alert(this.message)
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus()
      }
    }
  }
})
</script>

<style>
.border-grey {
  border: 3px solid grey;
}
</style>
