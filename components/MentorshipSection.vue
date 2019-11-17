<template>
  <section
    class="mentorship section"
    id="mentorship"
    v-scroll-reveal
  >
    <div class="container">
      <div class="inner">
        <h2>Mentorship</h2>
        <p>I enjoy helping others and have worked as a mentor to various junior and graduate developers and interns throughout my career.</p>
        <p>In 2019 I’ve been a mentor to 5 interns - one per month - as part of the BIMA and TRC <a
            href="https://trcmedia.org/training/inspiring-digital-leaders/"
            aria-label="Go to the trc website to read more about the inspiring digital leaders programme"
          >Inspiring Digital Leaders programme</a>. This involved working with graduates from various different backgrounds and skillsets. The majority of the interns had no coding experience, which was both challenging and rewarding for me as a mentor. During our time together, each of them built a website and deployed it to a staging site via <a
            href="http://www.netlify.com"
            aria-label="Go to the netlify website"
          >Netlify</a>. Many of them have expressed that they want to continue learning to code, and some of them have started attending local coding meetup groups.</p>
        <p>To find out more, here's some feedback from <a
            href="https://www.screenmedia.co.uk/news/idl-screenmedia-chats-with-first-intern-rosa/"
            aria-label="Go to the screenmedia website to read an interview with Rosa"
          >Rosa</a>, <a
            href="https://www.screenmedia.co.uk/news/idl-screenmedia-catches-up-with-second-intern-julia/"
            aria-label="Go to the screenmedia website to read an interview with Julia"
          >Julia</a>, and <a
            href="https://www.screenmedia.co.uk/news/idl-screenmedia-sits-down-with-their-third-intern-evan/"
            aria-label="Go to the screenmedia website to read an interview with Evan"
          >Evan</a> on their experience with the programme.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$dark: #3f3d56;
$lightpurple: #e9defe;

.mentorship {
  background: lighten(#fe907f, 10%);

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
      margin-left: 50px;
    }

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
  }
}
</style>