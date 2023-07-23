<template>
  <div class="info mb-4">
    <div class="infoimg">
      <img :src="'/static/img/' + info.id + '.jpg'" alt="" />
    </div>
    <div class="infomsg">
      <h1>{{ info.name }}</h1>
      <mark class="mb-4">{{ info.mark }}</mark>
      <p class="introduce mb-5">{{ info.introduce }}</p>
      <div class="prices mb-4">
        <span>原價:{{ info.price + 100 }}</span>
        <span>售價:{{ info.price }}</span>
      </div>
      <p class="choose mb-1">選購商品數量</p>
      <div class="countjoin">
        <select id="select" v-model="count">
          <option value="1">1支</option>
          <option value="2">2支</option>
          <option value="3">3支</option>
          <option value="4">4支</option>
          <option value="5">5支</option>
        </select>
        <button class="btn btn-dark" @click="joincart">加入購物車</button>
      </div>
    </div>
  </div>
  <div class="comment">
    <p class="commenttitle">產品評論</p>
    <div class="commentcontent">
      <div class="scorebox">
        <div class="scorestar">
          <div class="score">
            <p>4.5</p>
            <p>商品評價</p>
          </div>
          <div class="star">
            <p>2 個商品評論</p>
            <p>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="msgbox">
        <div class="likescore">
          <div class="item">
            <span>5</span>
            <span><i class="fas fa-star"></i></span>
            <span></span>
          </div>
          <div class="item">
            <span>4</span>
            <span><i class="fas fa-star"></i></span>
            <span></span>
          </div>
          <div class="item">
            <span>3</span>
            <span><i class="fas fa-star"></i></span>
            <span class="bg-secondary"></span>
          </div>
          <div class="item">
            <span>2</span>
            <span><i class="fas fa-star"></i></span>
            <span class="bg-secondary"></span>
          </div>
          <div class="item">
            <span>1</span>
            <span><i class="fas fa-star"></i></span>
            <span class="bg-secondary"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="message">
      <ul>
        <li style="border-bottom: 1px solid black">
          <p class="name">陳**</p>
          <div class="msgstar">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="msg">好燒！CP值高 顏色溫和 個性百搭 非常推薦女孩們。</p>
          <time class="time">2021/08/31</time>
        </li>
        <li>
          <p class="name">張**</p>
          <div class="msgstar">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="msg">讚！十分有質感 出門回頭率超高。</p>
          <time class="time">2021/01/02</time>
        </li>
      </ul>
    </div>
    <div class="maybelike">
      <p class="liketitle">您可能會喜歡...</p>
      <div class="likecontent">
        <div class="likecontain" v-for="item in maybelike">
          <img :src="'/static/img/' + item.id + '.jpg'" alt="" />
          <div class="likemsg">
            <h4>{{ item.name }}</h4>
            <mark>{{ item.mark }}</mark>
            <p>NT: {{ item.price }}</p>
            <button class="btn btn-dark" @click="lookmore(item)">
              查看詳情 >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  name: "Info",
  data() {
    return {
      info: {},
      arr: [],
      maybelike: [],
      count:'1'
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  mounted() {
    const stateData = this.$store.state.data;
    const values = Object.values(stateData).map((item) => item);
    values.forEach((el) => {
      el.forEach((ele) => {
        if (ele.id == this.id) {
          this.info = ele;
        } else {
          this.arr.push(ele);
        }
      });
    });

    //取隨機商品(您可能會喜歡...)
    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * this.arr.length);
      this.maybelike.push(this.arr[idx]);
      this.arr.splice(idx, 1); //取出後移除該商品
      //依id排序
      this.maybelike = this.maybelike.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
    }
  },
  components: {
    Footer,
  },
  methods: {
    lookmore(x) {
      this.$router.push("/all/" + x.id);
      this.info = x;
    },
    joincart(){
      this.$store.commit('joincart',{
        count:this.count - 0,
        m:this.info
      })
    }
  },
  watch: {
    info(x) {
      this.maybelike = [];
      const stateData = this.$store.state.data;
      const values = Object.values(stateData).map((item) => item);
      values.forEach((el) => {
        el.forEach((ele) => {
          if (ele.id == x.id) {
            this.info = ele;
          } else {
            this.arr.push(ele);
          }
        });
      });

      //取隨機商品(您可能會喜歡...)
      for (let i = 0; i < 4; i++) {
        const idx = Math.floor(Math.random() * this.arr.length);
        this.maybelike.push(this.arr[idx]);
        this.arr.splice(idx, 1); //取出後移除該商品
        //依id排序
        this.maybelike = this.maybelike.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
      }
      this.count = '1';
    },
  },
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  .infoimg {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .infomsg {
    width: 60%;
    padding: 75px 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    h1 {
      font-size: 48px;
      letter-spacing: 3px;
      border-bottom: 3px solid black;
    }
    mark {
      font-size: 13px;
      letter-spacing: 2px;
      opacity: 0.8;
    }
    .introduce {
      width: 75%;
      font-size: 18px;
      letter-spacing: 1.5px;
      text-align: left;
      line-height: 1.6;
    }
    .prices {
      width: 80%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        font-size: 22px;
        text-decoration: line-through;
      }
      span:nth-child(2) {
        font-size: 30px;
        letter-spacing: 2px;
      }
    }
    .choose {
      letter-spacing: 2.5px;
    }
    .countjoin {
      width: 80%;
      display: flex;
      justify-content: space-between;
      #select {
        width: 280px;
        padding: 8px;
        option {
          font-size: 18px;
        }
      }
    }
  }
}
.comment {
  width: 70%;
  margin: auto;
  font-size: 30px;
  .commenttitle {
    padding: 5px 0;
    border-bottom: 3px solid #000;
  }
  .commentcontent {
    display: flex;
    justify-content: space-between;
    height: 300px;
    margin-bottom: 20px;
    .scorebox {
      width: 50%;
      display: flex;
      .scorestar {
        display: flex;
        justify-content: center;
        margin: auto;
        font-size: 24px;
        .score {
          width: 140px;
          height: 140px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 3px solid black;
          p:nth-child(1) {
            font-size: 36px;
            margin-bottom: 0;
          }
          p:nth-child(2) {
            font-size: 18px;
          }
        }
        .star {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
          p {
            margin-bottom: 2px;
            font-size: 20px;
            letter-spacing: 2px;
          }
          p:nth-child(2) {
            color: orange;
          }
        }
      }
    }
    .msgbox {
      width: 50%;
      display: flex;
      .likescore {
        height: 140px;
        margin: auto;
        .item {
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          span:nth-child(1) {
            font-size: 18px;
            margin-right: 3px;
          }
          span:nth-child(2) {
            font-size: 16px;
            color: orange;
            margin-right: 20px;
          }
          span:nth-child(3) {
            width: 200px;
            height: 60%;
            background: orange;
          }
        }
      }
    }
  }
  .message {
    margin-bottom: 50px;
    ul {
      list-style-type: none;
      padding: 0;
      li {
        position: relative;
        padding: 5px 0;
        margin-bottom: 20px;
        text-align: left;
        .name {
          font-size: 20px;
          letter-spacing: 3px;
          margin-bottom: 5px;
        }
        .msgstar {
          font-size: 18px;
          margin-bottom: 5px;
          svg {
            margin-right: 3px;
            color: orange;
          }
        }
        .msg {
          font-size: 18px;
        }
        .time {
          font-size: 16px;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
  .maybelike {
    padding: 20px 0;
    border-bottom: 1px solid black;
    .liketitle {
      padding: 5px 0;
      letter-spacing: 2px;
    }
    .likecontent {
      display: flex;
      justify-content: space-between;
      .likecontain {
        width: 22%;
        display: flex;
        flex-direction: column;
        .likemsg {
          h4 {
            font-size: 18px;
            margin-bottom: 0;
            line-height: 1.2;
          }
          mark {
            font-size: 14px;
            line-height: 1.2;
          }
          p {
            font-size: 24px;
          }
          button {
          }
        }
      }
    }
  }
}
</style>