<template>
  <div class="page-wrapper">
    <a
      tabindex="0"
      href="#mainContent"
      class="skip-to-content"
    >Skip to content</a>

    <nav>
      <ul class="mainNav">
        <li>
          <a
            href="#about"
            class="menuItem"
            v-smooth-scroll
          >About</a>
        </li>
        <li>
          <a
            href="#skills"
            class="menuItem"
            v-smooth-scroll
          >Skills</a>
        </li>
        <li>
          <a
            href="#mentorship"
            class="menuItem"
            v-smooth-scroll
          >Mentorship</a>
        </li>
        <li>
          <a
            href="#work"
            class="menuItem"
            v-smooth-scroll
          >Writing
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="menuItem"
            v-smooth-scroll
          >Contact</a>
        </li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url("../assets/normalize.css");

$dark: #3f3d56;

html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

h2 {
  margin-bottom: 15px;
}

h3,
h4 {
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
}

p {
  margin-bottom: 15px;

  &.preamble {
    font-size: 19px;
    line-height: 30px;
  }

  a {
    color: #6c63ff;
    text-decoration: none;
    display: inline-block;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: #6c63ff;
    }
  }
}

a {
  transition: all 0.2s ease-in-out;

  &:focus {
    outline-offset: 4px;
    outline: 2px solid $dark;
    transition-delay: 0.1s;
  }
}

ul {
  margin-bottom: 30px;
}

nav {
  top: 30px;
  left: 0;
  z-index: 10;
  position: absolute;
  padding: 0 30px 15px;

  ul {
    padding: 0;
  }

  li {
    list-style: none;

    a {
      color: $dark;
      font-weight: 600;
      padding: 7px 0;
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;

      &:hover,
      &:focus {
        color: #6c63ff;
      }
    }
  }
}

.btn {
  color: $dark;
  font-weight: 700;
  margin-top: 10px;
  padding: 12px 30px;
  background: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  border: 2px solid #ffffff;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #ffffff;
    background: transparent;
  }

  &:focus {
    outline-offset: 4px;
    outline: 2px solid #6c63ff;
    transition-delay: 0.1s;
  }
}

.skip-to-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin-left: 0;
  text-align: center;
  list-style: outside none;
}

@media (min-width: 900px) {
  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 21px;
  }

  p,
  li {
    font-size: 18px;
    line-height: 26px;

    &.preamble {
      font-size: 24px;
    }
  }

  nav {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 8%;

    li {
      margin-right: 30px;
      display: inline-block;
    }
  }
}

@media (min-width: 1200px) {
  h2 {
    font-size: 38px;
  }

  h3 {
    font-size: 24px;
  }
}
</style>
