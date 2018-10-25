<template>
  <section class="posts">
  
    <div id="maincontainer">
      <div class='searchbar'>
        <searcbar :schema='schema' :model='model'></searcbar>
      </div>
      <div v-for="(video,index) in videolist" :key="index">
        <postcard :video='video' :detail='detail' :user='user' :getPosts='getPosts'></postcard><br>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import sidebar from './Sidebar'
  import postcard from './postcard'
  import axios from "axios";
  import VueForm from 'vue-form-generator';
  
  export default {
    name: 'posts',
    props: ['posts', 'user', 'getPosts', 'getVideolist'],
    components: {
      sidebar,
      postcard,
      "searcbar": VueForm.component
    },
    data() {
      return {
        detail: false,
        videolist: [],
        model: {
          searchinput: ''
        },
  
        schema: {
          fields: [{
            type: 'input',
            inputType: 'text',
            model: 'searchinput',
            placeholder: 'search ...',
            buttons: [{
              classes: 'btn',
              label: 'Search',
              onclick: (model) => {
                if (model.searchinput) {
                  this.getSearch()
                }
              }
            }, {
              classes: 'btn-clear',
              label: 'Clear',
              onclick: () => {
                this.model.searchinput = ''
                this.getPosts()
              }
            }]
          }]
        }
      }
    },
    created() {
      this.getVideos()
    },
    methods: {
      getVideos() {
        let self = this
        axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRi-6TD8hd6DaVWwp6N5R3pMv4LUVi-9o&part=snippet,id&order=date&maxResults=8')
          .then((result) => {
            self.videolist = result.data.items
  
            self.getVideolist(result.data.items)
          }).catch((err) => {
            console.log(err);
          });
      },
      getSearch() {
        let self = this
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRi-6TD8hd6DaVWwp6N5R3pMv4LUVi-9o&part=snippet&maxResults=8&p=${self.model.searchinput}`)
          .then((result) => {
            self.videolist = result.data.items
            self.getVideolist(result.data.items)
          }).catch((err) => {
            console.log(err);
          });
      },
    }
  }
</script>

<style scoped>
  .searchbar {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .posts {}
  
  * {
    box-sizing: border-box;
  }
  
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  #maincontainer {
    margin: 0 auto;
    text-align: left;
  }
  
  .blog-card {
    display: flex;
    flex-direction: row;
    background: #fff;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
  }
  
  .card-link {
    position: relative;
    display: block;
    color: inherit;
    text-decoration: none;
  }
  
  .card-link:hover .post-title {
    transition: color 0.3s ease;
    color: #e04f62;
  }
  
  .card-link:hover .post-image {
    transition: opacity 0.3s ease;
    opacity: 0.9;
  }
  
  .post-image {
    transition: opacity 0.3s ease;
    display: block;
    width: 100%;
    object-fit: cover;
  }
  
  .post-details {
    padding: 1.5rem;
  }
  
  .post-category {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.0625rem;
    margin: 0 0 0.75rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.125rem solid #ebebeb;
  }
  
  .post-title {
    transition: color 0.3s ease;
    font-size: 1.125rem;
    line-height: 1.4;
    color: #121212;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
  }
  
  .post-author {
    font-size: 0.875rem;
    line-height: 1;
    margin: 1.125rem 0 0 0;
    padding: 1.125rem 0 0 0;
    border-top: 0.0625rem solid #ebebeb;
  }
  
  @media (max-width: 40rem) {
    .blog-card {
      flex-wrap: wrap;
    }
  }
  
  @supports (display: grid) {
    .post-image {
      height: 100%;
    }
    .blog-card {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;
    }
    @media (max-width: 40rem) {
      .blog-card {
        grid-template-columns: auto;
        grid-template-rows: 12rem 1fr;
      }
    }
  }
</style>
