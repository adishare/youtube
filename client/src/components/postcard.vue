<template>
  <section class="postcard">
    <div id="maincontainer">
  
      <a class="card-link" @click="$router.push({name: 'postdetail',params: {id: videoId}})">
        <article class="blog-card">

          <img class="post-image" :src='videoPic' />
          <div class="post-details">
            <h4 class="post-category"> {{channel}} </h4>
  
            <div class="buttonbar">

            </div>
            <div>
              <h3 class="post-title">{{ title }}</h3>
              <p class="post-description" v-if="!detail">{{ description.slice(0,200) }} <a style="color:red;">... detail  </a> </p>
              <p class="post-description" v-if="detail">{{ description }}</p>

            </div>
          </div>
  
        </article>
      </a>
  
      <div class="cardfooter">
        <div>Like</div>
      </div>
  
    </div>
  </section>
</template>

<script>

  export default {
    name: 'postcard',
    props: ['detail', 'user', 'getPosts','video'],

    data() {
      return {
        videoId : this.video.id.videoId, 
        title : this.video.snippet.title,
        videoPic : this.video.snippet.thumbnails.medium.url, //180x320
        channel : this.video.snippet.channelTitle,
        description : this.video.snippet.description,
      }
    },
    watch: {
      video: function(newVal) {
        this.videoId = newVal.id.videoId 
        this.title = newVal.snippet.title
        this.videoPic = newVal.snippet.thumbnails.medium.url //180x320
        this.channel = newVal.snippet.channelTitle
        this.description = newVal.snippet.description

      },
  
    },
  }
</script>

<style scoped lang="css">
  .commentbar {
    /* width: 100%; */
    display: grid;
    grid-template-rows: 1fr minmax(30px, 100px) minmax(20px, 50px);
    justify-items: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    padding-top: 15px;
  }
  
  .buttonbar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  
  .postcomments {
    width: 100%;
    max-width: 90%;
    padding-top: 20px;
  }
  
  .commentarea {
    width: 100%;
    max-width: 90%;
    padding-top: 20px;
  }
  
  .postcard {
    transition: .5s;
  }
  
  * {
    box-sizing: border-box;
  }
  
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  #maincontainer {
    max-width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  
  #sharecmpnt {
    grid-column: 1 / span 2;
  }
  
  .cardfooter {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    min-height: 40px;
    /* z-index: 10; */
  }
  
  .cardfooter div {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  
  i {
    font-size: 13px;
  }
  
  h6 {
    text-align: center;
  }
  
  h5 {
    text-align: right;
  }
  
  .cardfooter div:hover {
    cursor: pointer;
    background-color: rgb(219, 219, 219);
  }
  
  .blog-card {
    display: flex;
    flex-direction: row;
    background: #fff;
    box-shadow: 0 -0.2875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
    transition: .1s;
  }
  
  .blog-card:hover {
    cursor: pointer;
    box-shadow: 0 -0.2875rem 1.1rem rgba(0, 0, 0, 0.3);
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
