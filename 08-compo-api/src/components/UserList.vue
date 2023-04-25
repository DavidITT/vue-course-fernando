<template>
  <ul>
    <slot :user="user" v-for="user in users" :key="user.id" />
  </ul>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

ul{
  list-style: none;
}

</style>