<template>
  <q-page class="q-ma-md">
    <span class="text-h3"> Forms</span>
    <q-separator spaced/>
    <div class="row q-pt-md">
      <q-form @submit="onSubmit" @reset="onReset" class="col-12 col-md-6 q-mx-auto q-gutter-xs">
        <q-input filled v-model="userForm.email" label="Correo electronico" type="email" lazy-rules
                 :rules="[val => val && val.length > 0 || 'Este campo es obligatorio',
                          val => isValidEmail(val)]"/>
        <q-input filled v-model="userForm.password" type="password" label="Contraseña" lazy-rules
                 :rules="[val => val && val.length > 0 || 'Este campo es obligatorio']"/>

        <q-input filled v-model="userForm.passwordConfirm" type="password" label="Repetir contraseña" lazy-rules
                 :rules="[val => val && val.length > 0 || 'Este campo es obligatorio', val => isSamePassword(val)]"/>

        <q-checkbox v-model="userForm.conditions" label="Acepto las condiciones y términos de uso"
                    :style="userForm.errorInConditions && !userForm.conditions && 'color:red'"/>

        <div class="row justify-end">
          <q-btn label="Reset" type="reset" color="primary" flat class="q-mr-sm"/>
          <q-btn label="Submit" type="submit" color="primary" unelevated/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useQuasar} from 'quasar'

export default defineComponent({
  name: 'FormsPage',

  setup() {
    const $q = useQuasar()

    const userForm = ref({
      email: '',
      password: '',
      passwordConfirm: '',
      conditions: false,
      errorInConditions: false
    })

    return {
      userForm,
      onSubmit: () => {
        userForm.value.errorInConditions = false
        if (!userForm.value.conditions) {
          $q.notify({
            icon: 'las la-exclamation-circle',
            color:'red',
            message: '!Debe aceptar los terminos y condiciones!'
          })
          userForm.value.errorInConditions = true
          return
        }
        console.log(userForm.value)
      },
      onReset: () => {
        userForm.value = {
          email: '',
          password: '',
          passwordConfirm: '',
          conditions: false,
          errorInConditions: false
        }
      },
      isValidEmail(val) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword(val) {
        return (val === userForm.value.password) || 'Las contraseñas no coinciden'
      }
    }
  }
})
</script>
