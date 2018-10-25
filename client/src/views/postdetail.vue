<template>
  <section class="postdetail">

    <transition name="fade">
      <div id="delly">
        <postcard class="classcard" :post='post' :video="video" :videolist='videolist' :posts='posts' :detail='detail' :user='user' :getPosts='getPosts'></postcard>
      </div>
    </transition>

    <router-view/>
  </section>
</template>



<script>

  import postcard from "../components/postcardDetail.vue";
  import $ from 'jquery'
  import axios from 'axios'
  
  export default {
    name: 'postdetail',
    props: ['posts', 'user','getPosts','videolist'],
    components: {

      postcard
    },
    data() {
      return {
        post: '',
        param: this.$route.params.id,
        detail: true,

        video : ''
        
      }
    },
    created() {
      this.getVideoById()
    },
    mounted() {

    },
    watch: {
      '$route.params.id': function(newVal) {
        $("#delly").css("display", "none");
        $("#delly").fadeIn(800).css("display", "normal")
        this.param = newVal
        this.post = this.posts.filter(item => {
          return item._id == this.param
        })[0]
  
      },
      post: {
        immediate: true,
        handler() {
          //
        }
      }
    },
    methods: {
      getVideoById() {
        let self = this
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.param}&key=AIzaSyDRi-6TD8hd6DaVWwp6N5R3pMv4LUVi-9o&part=snippet,contentDetails,id`)
          .then((result) => {
            self.video = result.data.items[0]
          }).catch((err) => {
            console.log(err);
          });
      }
    }
  }
</script>

<style scoped lang="css">
  .postdetail {
    display: grid;
    grid-template-columns: 5fr;
    background: radial-gradient(circle, #ffffff, #ced3ce);
    padding-top: 50px;
    min-height: 650px;
    transition: .5s;
    padding-bottom: 130px;
  }
  
  .hidden {
    display: none;
  }
  
  .fade-enter-active {
    transition: opacity 1.5s;
  }
  
  .fade-leave-active {
    opacity: 0;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
