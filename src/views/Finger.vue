<template>
  <div class="container-lg cards">
    <div class="everyObj" v-for="(everyObj,index) in getPage" @click="getProduct(everyObj)">
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
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn border-secondary" @click="nowpage--" :disabled="nowpage<=1">&lt;</button>
      <button type="button" class="btn mx-2" disabled>{{nowpage}}</button>
      <button type="button" class="btn border-secondary" @click="nowpage++" :disabled="nowpage>=(getJSON.length/9)">&gt;</button>
  </div>
</template>

<script>
export default {
  name: "Finger",
  data() {
    return {
      nowpage: 1,
    };
  },
  computed: {
    getJSON() {
      return this.$store.state.data.finger;
    },
    getPage() {
      console.log(this.getJSON);
      let newpage = this.getJSON.slice(
        (this.nowpage - 1) * 9,
        this.nowpage * 9
      );
      console.log(newpage);
      return newpage;
    },
  },
  methods: {
    getProduct(obj) {
      console.log(obj);
      this.$router.push("/all/" + obj.id);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
.btn-group {
  .btn {
    width: 45px;
    height: 45px;
    font-size: 24px;
  }
}
</style>