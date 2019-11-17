<template>
  <div>
    <main id="mainContent">
      <section class="intro section">
        <div class="container">
          <div class="wrapper">
            <IntroImage />
            <IntroText />
          </div>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <MentorshipSection />
      <WorkSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; Lynne Finnigan {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import IntroImage from "~/components/IntroImage.vue";
import IntroText from "~/components/IntroText.vue";
import AboutSection from "~/components/AboutSection.vue";
import SkillsSection from "~/components/SkillsSection.vue";
import MentorshipSection from "~/components/MentorshipSection.vue";
import WorkSection from "~/components/WorkSection.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    IntroImage,
    IntroText,
    AboutSection,
    SkillsSection,
    MentorshipSection,
    WorkSection,
    ContactSection
  }
};
</script>

<style lang="scss">
$purple: #7d628a;
$orange: #fe907f;
$dark: #3f3d56;

.container {
  margin: 0 auto;
  padding: 0 8%;
  max-width: 1400px;
}

.intro {
  position: relative;
  text-align: center;
  background: $orange;
}

.wrapper {
  padding: 30px 0;
}

.section {
  .inner {
    padding: 30px 0;
  }
}

.links {
  padding-top: 15px;
}

.footer {
  padding: 10px 0;
  background: darken($dark, 10%);

  p {
    margin: 0;
    color: rgba(#fff, 0.8);
    text-align: right;
  }
}

@media (min-width: 767px) {
  .wrapper,
  .section .inner {
    padding: 50px 0;
  }
}

@media (min-width: 900px) {
  .wrapper {
    display: flex;
    align-items: center;
    min-height: 90vh;
  }

  .section {
    .inner {
      padding: 60px 0;
    }
  }

  .intro {
    text-align: left;
  }
}
</style>
