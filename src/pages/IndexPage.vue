<template>
  <q-page padding>
    <input  v-model="message"/>
    <button @click="message = ''">clear</button>
    <h5>
      {{message}}
    </h5>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data(){
    return {
      message:'i love vue js! much harder than you thought'
    }
  }
})
</script>

<style>

</style>
