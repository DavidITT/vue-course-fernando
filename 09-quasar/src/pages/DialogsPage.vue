<template>
  <q-page class="q-pa-md">
    <span class="text-h3">Dialogos</span>

    <template v-if="name">
      <q-separator spaced />
      <span class="text-h6">{{ name }}</span>
    </template>

    <q-separator spaced/>
    <div class="q-pa-md q-gutter-sm">
      <span class="text-h3"></span>
      <q-btn label="Alert" color="primary" @click="alert"/>
      <q-btn label="Confirm" color="primary" @click="confirm"/>
      <q-btn label="Prompt" color="primary" @click="prompt"/>
    </div>

  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import useQuasar from 'quasar/src/composables/use-quasar.js';

export default defineComponent({
  name: 'DialogsPage',

  setup() {
    const $q = useQuasar()
    const name = ref('')

    function alert() {
      $q.dialog({
        title: 'Alert',
        position: 'bottom',
        message: 'Some message'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    function confirm() {
      $q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    function prompt() {
      $q.dialog({
        title: 'Prompt',
        message: 'What is your name?',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        console.log('>>>> OK, received', data)
        name.value = data
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    return {alert, confirm, prompt, name}
  }
})
</script>
