<template lang="html">
  <section class="homepage">
  
    <posts :user='user' :posts='posts' :getPosts='getPosts' :getVideolist='getVideolist'></posts>
  
  </section>
</template>

<script lang="js">
  import posts from './Posts.vue'
  
  export default {
    name: 'homepage',
    props: ['user', 'posts', 'setUser', 'getPosts','getVideolist'],
    components: {
      
      posts
    }
  }
</script>


<style scoped>
  .homepage {
    display: grid;
    grid-template-columns: 5fr;
    background: radial-gradient(circle, #ffffff, #ced3ce);
    padding-top: 50px;
    min-height: 650px;
    padding-bottom: 200px;
  }
</style>
