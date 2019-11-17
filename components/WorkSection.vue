<template>
  <section
    class="work section"
    id="work"
    v-scroll-reveal
  >
    <div class="container">
      <div class="inner">
        <h2>Writing</h2>
        <p>I enjoy writing articles in my spare time. Here are a few articles I've written on SCSS, Vue.js, and more.</p>
        <div class="blogPosts">
          <a
            href="https://dev.to/lynnewritescode/colour-coding-with-scss-each-loops-31k"
            aria-label="Go to the DEV website to read my article on Colour coding with SCSS each loops"
            class="blogPost"
          >
            <div class="content">
              <img
                src="/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
                alt=""
              >
              <div class="text">
                <h3 class="title">Colour coding with SCSS each loops</h3>
              </div>
            </div>
          </a>
          <a
            href="https://dev.to/lynnewritescode/6-reasons-to-use-vuejs-1p6c"
            aria-label="Go to the DEV website to read my article on 6 Reasons to use Vue.js"
            class="blogPost"
          >
            <div class="content">
              <img
                src="/clement-h-95YRwf6CNw8-unsplash.jpg"
                alt=""
              >
              <div class="text">
                <h3 class="title">6 Reasons to use Vue.js</h3>
              </div>
            </div>
          </a>
          <a
            href="https://dev.to/lynnewritescode/my-scss-setup-within-a-vue-cli-3-project-4jan"
            aria-label="Go to the DEV website to read my article on My SCSS setup within a Vue CLI 3 project"
            class="blogPost"
          >
            <div class="content">
              <img
                src="/safar-safarov-MSN8TFhJ0is-unsplash.jpg"
                alt=""
              >
              <div class="text">
                <h3 class="title">My SCSS setup within a Vue CLI 3 project</h3>
              </div>
            </div>
          </a>
          <a
            href="https://dev.to/lynnewritescode/5-css-tips-you-didnt-know-you-needed-nb3"
            aria-label="Go to the DEV website to read my article on 5 CSS tips you didn't know you needed"
            class="blogPost"
          >
            <div class="content">
              <img
                src="/thought-catalog-505eectW54k-unsplash.jpg"
                alt=""
              >
              <div class="text">
                <h3 class="title">5 CSS tips you didn't know you needed</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$dark: #3f3d56;
$purple: #7d628a;

.work {
  color: #ffffff;
  background: $purple;
}

.githubItems {
  margin-bottom: 30px;
}

.blogPosts {
  margin: 0 -15px;
}

.blogPost {
  display: block;
  padding: 0 15px;
  margin: 25px 0;
  text-decoration: none;

  .content {
    height: 100%;
    background: #fff;
    border-radius: 0;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    display: block;
  }

  .content,
  img {
    transition: all 0.2s ease-in-out;
  }

  .text {
    padding: 15px;
  }

  .title {
    margin: 0;
    color: $dark;
  }

  &:hover,
  &:focus {
    .content {
      border-radius: 0 0 20px 0;
    }

    .title {
      color: #6c63ff;
    }
  }
}

@media (min-width: 600px) {
  .blogPosts,
  .githubItems {
    display: flex;
    flex-wrap: wrap;
  }

  .blogPost {
    flex-basis: 50%;
    max-width: 50%;
    flex-shrink: 0;
    flex-grow: 0;
    margin: 15px 0;
  }

  .githubItems {
    margin: 0 0 30px;
  }

  h3 {
    margin-top: 25px;
  }
}

@media (min-width: 900px) {
  .githubItems {
    margin: 25px 0 50px;
  }

  .blogPost {
    flex-basis: 25%;
    max-width: 25%;

    .title {
      font-size: 19px;
    }
  }
}
</style>