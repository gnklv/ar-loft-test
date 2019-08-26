<template>
  <div class="svg-loader__wrapper">
    <img class="svg-loader" src="@/assets/images/logo.svg" alt="Prosto Loft">
    <div class="svg-loader__content">
      <p class="svg-loader__title">
        Prosto Loft
      </p>
      <p class="svg-loader__caption">
        Мастерская современной мебели
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SvgLoader"
};
</script>

<style lang="scss" scoped>
@keyframes fill {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.15;
  }
}

.svg-loader {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 185px;
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-bottom: 5px solid #000;
  fill: #000;

  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:  100%;
    animation-name: fill;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  &__content {
    text-align: center;
  }

  &__title {
    margin: 0;
    font-size: 35px;
    line-height: 1.2;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__caption {
    margin: 0;
    font-size: 16px;
    line-height: 1.2;
  }
}
</style>
