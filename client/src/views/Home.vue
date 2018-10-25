<template>
  <div class="home">
    <Homepage :posts='posts' :getPosts="getPosts" :user='user' :setUser='setUser' :getVideolist='getVideolist'></Homepage>
  
  </div>
</template>

<script>
  import Homepage from '@/components/Homepage.vue'
  
  export default {
    name: 'home',
    props: ['setUser', 'user', 'posts', 'getPosts', 'getVideolist'],
    components: {
      Homepage
    }
  }
</script>
