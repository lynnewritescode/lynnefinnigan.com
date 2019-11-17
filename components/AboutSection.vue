<template>
  <section
    class="about section"
    id="about"
    v-scroll-reveal
  >
    <div class="container">
      <div class="inner">
        <div class="image">
          <img
            src="/Screenmedia_Lynne.JPG"
            alt="An image of Lynne sitting at a table and writing in her notebook."
          >
        </div>
        <div class="text">
          <h2>About me</h2>
          <p class="preamble">I love starting with a blank page and bringing beautiful designs to life on the web.</p>
          <p>I've been a developer for almost 8 years, and I absolutely love what I do. I have a passion for learning, and in development there is always something new to learn. There is something very satisfying about being able to solve a problem.</p>
          <p>I'm an avid reader (checkout my <a
              href="https://www.goodreads.com/user/show/3141675-lynne"
              aria-label="Go to my goodreads profile"
            >Goodreads profile</a>) and would much rather read my book than watch tv. I <strong>love</strong> music, philosophy, stoicism, meditation, yoga, circus, and gaming. I spend a lot of time in the gym. I enjoy spending time in nature, and connecting with people.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  background: #f2f2f2;

  .image {
    margin: 0 0 30px;
  }

  img {
    width: 100%;
    display: block;
  }

  @media (min-width: 900px) {
    .inner {
      display: flex;
    }

    .image {
      flex-basis: 30%;
      max-width: 30%;
      flex-shrink: 0;
      flex-grow: 0;
      margin: 0 40px 0 0;
    }
  }

  @media (min-width: 1200px) {
    .image {
      margin-right: 60px;
    }
  }
}
</style>