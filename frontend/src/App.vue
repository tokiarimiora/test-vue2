<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.v-main__wrap {
  background: #eddff0;
  --primary-color: #9c2fae;
  --secondary-color: #e9d6ec;
}
</style>
