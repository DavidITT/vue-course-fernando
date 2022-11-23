<template>
  <div>
    <!--<router-link :to="{ name:'home'}">Pokemon List</router-link>
        <router-link :to="{ name:'pokemon-id', params:{ id: 85 }}">Pokemon por id</router-link>
        <router-link :to="{ name:'about'}">About</router-link>-->
    <CustomLink
        v-for="link in links"
        :key="link.to"
        :link="link"
    />
  </div>
</template>

<script>

import {defineAsyncComponent} from "vue";

export default {
  name: "NavBar",
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
  },
  data() {
    return {
      links: [
        //Pokemon
        {to: 'pokemon-home', name: 'Pokemon'},
        {to: 'pokemon-id', name: 'Por Id', id: 151},
        {to: 'pokemon-about', name: 'About'},
        //Dbz
        {to: 'dbz-about', name: 'Personajes'},
        {to: 'dbz-characters', name: 'Dbz About'},

        {to: 'https://google.com', name: 'Google'}
      ]
    }
  }
}
</script>

<style scoped>

div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: black;
  margin: 0 10px;
}

/*a.router-link-exact-active {
  color: #41B883;
}*/

</style>