<template>
  <section
    class="skills section"
    id="skills"
    v-scroll-reveal
  >
    <div class="container">
      <div class="inner developer">
        <div class="text">
          <h2>Skills</h2>
          <h3>Senior front-end developer</h3>
          <p>I am extremely passionate about delivering high quality code. In my time at <a
              href="http://www.screenmedia.co.uk"
              aria-label="Go to the screenmedia website"
            >Screenmedia</a> I've been responsible for widescale improvements in their design and development processes. Day to day, I work closely with UX planners, designers, project managers, and developers, to create fully responsive websites that work well on any screen.</p>
          <p>Aside from the development aspect of my job, I've learned the importance of being able to communicate well with colleagues and clients. I'm known for being able to describe development concepts "in English". Creating a website is a very collaborative and creative process, with an emphasis on team work, and this is one of the things I enjoy the most about my job.</p>

          <h3>Development community & open-source</h3>
          <p>I like to be active in the development community, and as a result I started and continue to organise the <a
              href="https://www.meetup.com/vueglasgow/"
              aria-label="Go to the Vue.js Glasgow meetup website"
            >Vue.js Glasgow</a> meetup event. I also attend the <a
              href="https://www.meetup.com/Glasgow-Umbraco-Users-Group-GLUUG/"
              aria-label="Go to the Glasgow Umbraco meetup website"
            >Glasgow Umbraco Users Group</a> and <a
              href="https://www.meetup.com/Ladies-of-Code-Glasgow/"
              aria-label="Go to the ladies of code meetup website"
            >Ladies of Code</a> meetup events.</p>

          <p>I contribute to open-source projects when I can, and have recently made 2 contributions to the Umbraco code base. I also enjoy writing <a
              href="#work"
              aria-label="Go to the work section of this page"
            >blog posts</a>.</p>

        </div>

        <div class="sideColumn">
          <div class="languages">
            <h4 class="title">I work with</h4>
            <p>HTML, Sass, Less, CSS, JavaScript, Gulp.js, Vue.js, Umbraco, Razor</p>
          </div>

          <div class="tools">
            <h4 class="title">Tools</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
              <li>Gitkraken</li>
              <li>Github</li>
              <li>Git</li>
              <li>Netlify</li>
              <li>Terminal</li>
              <li>Hyper</li>
              <li>Azure DevOps</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
$dark: #3f3d56;
$lightpurple: #e9defe;

.sideColumn {
  margin-top: 50px;
}

.skills {
  background: $lightpurple;

  .languages,
  .tools {
    padding: 20px;
    position: relative;
    border: 1px solid #6c63ff;

    .title {
      position: absolute;
      top: -25px;
      left: -1px;
      padding: 3px 20px;
      color: #fff;
      background: #6c63ff;
    }
  }

  .languages {
    margin: 25px 0 60px;

    p {
      margin: 0;
    }
  }

  .tools {
    ul {
      margin: 0;
      list-style: none;
      padding-left: 20px;

      li {
        position: relative;

        &:before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          display: block;
          position: absolute;
          left: -20px;
          top: 50%;
          margin-top: -2.5px;
          background: #6c63ff;
        }
      }
    }
  }

  @media (min-width: 900px) {
    .inner {
      &.developer {
        display: flex;
      }
    }

    h3 {
      margin-top: 25px;
    }

    .sideColumn {
      flex-basis: 30%;
      max-width: 30%;
      flex-shrink: 0;
      flex-grow: 0;
      margin-top: 10px;
      margin-left: 50px;
    }
  }
}
</style>