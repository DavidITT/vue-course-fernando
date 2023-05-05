<template>
  <q-page class="q-ma-md">
    <span class="text-h3"> Forms</span>
    <q-separator spaced/>
    <div class="row">
      <div class="col-6">
        <q-form @submit="onsubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules type="email"
                   :rules="[val => val && val.length > 0 || 'Please type somethiung']"/>
          <q-input filled type="password" v-model="age" label="Uour age *" lazy-rules
                   :rules="[ val => val !== null && val !== '' || 'Please type your age', val => val > 0 && val < 100 || 'Please type a real age']"/>
          <q-toggle model-value="accept" label="I accept the license and terms"/>

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'FormsPage',

  setup() {
    const name = ref([''])
    const age = ref([0])
    const accept  = ref(false)
    return { name, age, accept }
  }
})
</script>
