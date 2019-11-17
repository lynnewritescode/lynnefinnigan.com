<template>
  <div class="intro-text">
    <h1
      class="title"
      v-scroll-reveal
    >
      Lynne Finnigan
    </h1>
    <p
      class="subtitle"
      v-scroll-reveal
    >
      Senior front-end developer, mentor, and open-source contributor.
    </p>
    <div class="social-share">
      <ul class="social">
        <li class="e-email">
          <a
            href="mailto:lynnewritescode@gmail.com"
            aria-label="Send me an email"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="gmailTitle"
            >
              <title id="gmailTitle">Gmail icon</title>
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
            </svg>
          </a>
        </li>
        <li class="e-linkedin">
          <a
            href="https://www.linkedin.com/in/lynne-finnigan/"
            aria-label="Go to my LinkedIn profile"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="linkedInTitle"
            >
              <title id="linkedInTitle">LinkedIn icon</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
        </li>
        <li class="e-twitter">
          <a
            href="https://twitter.com/lynnewritescode"
            aria-label="Go to my twitter profile"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              aria-labelledby="twitterTitle"
            >
              <title id="twitterTitle">Twitter icon</title>
              <path
                d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
                class="cls-2"
              ></path>
            </svg>
          </a>
        </li>
        <li class="e-github">
          <a
            href="https://github.com/lynnewritescode"
            aria-label="Go to my github profile"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="githubTitle"
            >
              <title id="githubTitle">GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$dark: #3f3d56;

.title {
  font-family: "Raleway", sans-serif;
  display: block;
  font-weight: 600;
  font-size: 32px;
  color: $dark;
  margin-bottom: 10px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: $dark;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.social-share {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  .social {
    padding: 0;
  }

  li {
    width: 35px;
    height: 20px;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    &.e-twitter {
      svg {
        width: 40px;
        height: 37px;
      }
    }

    &.e-github {
      svg {
        width: 22px;
        height: 22px;
      }
    }

    &.e-email {
      svg {
        width: 24px;
        height: 24px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
      left: 50%;
      position: absolute;
      top: 50%;
      fill: $dark;
      transform: translate(-51%, -50%);
      transition: fill 0.2s ease-in-out;
    }

    a {
      &:hover,
      &:focus {
        outline: none;

        svg {
          fill: #6c63ff;
        }
      }

      &:focus {
        svg {
          outline-offset: 4px;
          outline: 2px solid $dark;
          transition-delay: 0.1s;
        }
      }
    }
  }
}

@media (min-width: 900px) {
  .title {
    font-size: 46px;
    margin-bottom: 15px;
  }

  .subtitle {
    font-size: 24px;
    line-height: 30px;
  }

  .social-share {
    justify-content: left;
  }
}

@media (min-width: 1000px) {
  .intro-text {
    padding-right: 15px;
  }

  .title {
    font-size: 60px;
  }

  .subtitle {
    margin: 0;
    font-size: 30px;
    line-height: 33px;
    max-width: 600px;
  }

  .social-share {
    margin: 20px 0;

    li {
      width: 45px;

      &.e-twitter {
        svg {
          width: 50px;
          height: 47px;
        }
      }

      &.e-github {
        svg {
          width: 32px;
          height: 32px;
        }
      }

      &.e-email {
        svg {
          width: 34px;
          height: 34px;
        }
      }

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>