<template>
  <div class="cardx">
    <div class="info">
      <p>{{ card }}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        adipisci corporis quod cupiditate magni corrupti necessitatibus, ut
        dolorum ipsa architecto saepe impedit numquam voluptates laborum ex
        repudiandae voluptatem dolorem dignissimos.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    card: {
      Type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.cardx {
  width: 24rem;
  height: 100%;
  position: absolute;
  flex-direction: unset;
  background: rgb(235, 235, 225);
  transition: 0.6s;
  right: -24rem;
  top: 0;
  &.active {
    transform: translateX(-24rem);
  }
  .info {

  }
}
</style>