<template>
  <q-page>

    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col bg-warning">2</div>
      <div class="col bg-accent">3</div>
    </div>

    <div class="row q-mb-md justify-center">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-warning">2</div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-warning">2</div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-warning">2</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-around">
      <div class="col col-12 col-sm-6 col-md-4 bg-primary">1</div>
      <div class="col col-12 col-sm-6 col-md-4  bg-warning">2</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
      <div class="square-box q-mx-md bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-warning"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-around">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-warning"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column q-mb-md items-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-warning"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column q-mb-md items-end bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-warning"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-hide q-mb-md items-center justify-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-warning"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-hide q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-warning"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-hide q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary self-start"></div>
      <div class="square-box bg-warning self-end"></div>
      <div class="square-box bg-accent"></div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FlexPage'
})
</script>

<style scoped>

.col, .col-4, col-6, col-12{
  height: 50px;
}

.square-box{
  width: 50px;
  height: 50px;
}

.custom-hide{
  height: 300px;
}

</style>
