<template>
  <div id="app">
  
    <navbar :getVideolist='getVideolist' :setUser='setUser' :user='user'></navbar>
  
    <transition name="fade" mode="out-in">
      <router-view :user='user' :setUser='setUser' :getVideolist='getVideolist' :videolist='videolist'></router-view>
    </transition>
  
  </div>
</template>

<script>
  import navbar from '@/components/Navbar.vue'
  import axios from "axios";
  
  export default {
    components: {
      navbar,
    },
    name: 'granparent',
    data() {
      return {
        user: '',
        message: '',
        filteredPosts: '',
        post: '',
        token: localStorage.getItem('token') || '',
  
        videolist: []
      }
    },
    created() {
  
    },
    mounted() {
      if (this.token) {
        this.getUserByToken(this.token)
      }
      if (this.filteredPosts) {
        this.post = this.filteredPosts
      }
    },
    watch: {
  
    },
    methods: {
      getVideolist(value) {
        this.videolist = value
      },
      setUser: function(val) {
        this.user = val
      },
  
      getUserByToken(token) {
        axios.get(`http://localhost:3000/users/verify/${token}`, {})
          .then((result) => {
            this.user = result.data
          })
          .catch(function(error) {
            console.log(error);
          })
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.15s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
