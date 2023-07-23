<template>
  <div class="container-lg cards">
    <!-- <Card v-for="(item,index) in getJSON" :getcard="item"></Card> -->
    <div class="everyObj" v-for="(everyObj,index) in getJSON" @click="getProduct(everyObj)">
      <div class="imgSize">
        <img :src="'./static/img/'+everyObj.id+'.jpg'" class="card-img-top"/>
      </div>
      <div class="card-body">
        <p class="card-text">
          <h4 class="name">{{everyObj.name}}</h4>
          <p class="mark">{{everyObj.mark}}</p>
          <p class="size mb-2">$:{{everyObj.price}}</p>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Lipstick",
  data() {
    return {};
  },
  computed: {
    getJSON() {
      return this.$store.state.data.lipstick
    },
  },
  methods: {
        getProduct(obj) {
      console.log(obj);
      this.$router.push('/all/'+obj.id)
    },
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .everyObj {
    width: 26%;
    .card-body {
      .card-text {
        .name {
          text-align: center;
          font-weight: 400;
          letter-spacing: 2px;
          font-size: 21px;
        }
        .mark {
          text-align: center;
          font-weight: bold;
          letter-spacing: 0.5px;
          font-size: 13px;
        }
      }
    }
  }
}
</style>