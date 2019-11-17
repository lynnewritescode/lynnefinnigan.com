<template>
  <div class="intro-asset">
    <img
      src="/circle.svg"
      class="circle"
      v-parallax="0.08"
      aria-hidden="true"
    >
    <img
      src="/main-asset.svg"
      alt="Illustration of a female sitting cross legged with a laptop."
      class="main-img"
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro-asset {
  width: 100%;
  max-width: 400px;
  position: relative;
  margin: 0 auto 30px;

  img {
    width: 100%;
  }

  .main-img {
    left: 0;
    bottom: 0;
    position: absolute;
  }
}

@media (min-width: 900px) {
  .intro-asset {
    order: 2;
    margin: 0 0 0 auto;
  }
}
</style>