<template>
  <section class="sidebar">  
    <ul class="rolldown-list" id="myList">
      <div class="listpost">
        <li @click="$router.push('/')"> All </li>
      </div>
    </ul>
    <br>
    <ul class="rolldown-list" id="myList">
      <div class="listpost" v-for="post in posts" :key="post._id">
        <li :class="{ 'liactive' : $route.params.id == post._id}" @click="goToDetail(post._id)"> {{ post.title.slice(0,20) }} </li>
      </div>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'sidebar',
    props: ['user', 'posts', 'setUser'],
    components: {
  
    },
    created() {

    },
    methods: {
      goToDetail(artilceId) {
        this.$router.push({
          name: 'postdetail',
          params: {
            id: artilceId
          }
        })
      }
    },
  }
</script>

<style>
  .sidebar {
    padding-left: 15px;
  }
  
  .liactive {
    margin-left: 20px;
    margin-right: -20px;
    background-color: rgb(24, 24, 24) !important;
    color: white;
  }
  
  .listpost {
    font: 1.2em/1.4 'Oswald', sans-serif;
    color: rgb(19, 19, 19);
    text-align: left;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .rolldown-list {
    text-align: left;
    padding: 0;
    margin: 0;
  }
  
  .rolldown-list li {
    padding: 0.5em;
    margin-bottom: .225em;
    display: block;
    list-style: none;
    text-transform: uppercase;
    transition: .3s;
  }
  
  .rolldown-list li:hover {
    cursor: pointer;
    background-color: rgb(24, 24, 24) !important;
    margin-left: -10px !important;
    margin-right: -10px !important;
    color: #ccc;
  }
  
  .rolldown-list li {
    visibility: hidden;
    animation: rolldown .7s 1;
    transform-origin: 50% 0;
    animation-fill-mode: forwards;
    box-shadow: 0 0 10px rgb(182, 182, 182);
  }
  
  .rolldown-list li:nth-child(2n) {
    background-color: rgb(255, 255, 255);
  }
  
  .rolldown-list li:nth-child(2n+1) {
    background-color: rgb(255, 255, 255);
  }
  
  #myList {}
  
  #btnReload {
    float: right;
    color: #333;
    background: #ccc;
    text-transform: uppercase;
    border: none;
    padding: .5em 1em;
  }
  
  #btnReload:hover {
    background: #ddd;
  }
  
  @keyframes rolldown {
    0% {
      visibility: visible;
      transform: rotateX(180deg) perspective(500px);
    }
    70% {
      visibility: visible;
      transform: rotateX(-20deg);
    }
    100% {
      visibility: visible;
      transform: rotateX(0deg);
    }
  }
</style>
