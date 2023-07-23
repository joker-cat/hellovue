<template>
  <div class="footer">
    <div class="logomsg">
      <div class="logo">
        <p>Jean</p>
        <p>since 2003</p>
      </div>
      <div class="msg">
        <p>
          美 是因為越來越了解自己<br />
          讓Jean的色彩，襯出妳的個性<br />
          產品之間靈活搭配，展現您的時尚風格<br />
          用最懂妳的彩粧，點綴出你您的完美主義<br />
          展現出最耀眼的你
        </p>
      </div>
    </div>
    <div class="others">
      <div class="othercontent">
        <ul>
          <li>線上服務</li>
          <li>工作機會</li>
          <li>隱私政策</li>
          <li>法律聲明</li>
          <li>常見問題</li>
          <li>保養與服務</li>
        </ul>
        <ul>
          <li>營業據點</li>
          <li>全台據點查詢</li>
        </ul>
        <ul>
          <li>社群媒體</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twiiter</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  width: 70%;
  margin: auto;
  padding-top: 80px;
  display: flex;
  .logomsg {
    width: 50%;
    display: flex;
		align-items: center;
    .logo {
      width: 50%;
      p {
        margin-bottom: 0;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1;
      }
      p:nth-child(1) {
        font-size: 46px;
      }
      p:nth-child(2) {
        font-size: 14px;
      }
    }
    .msg {
      width: 50%;
      padding-left: 30px;
      p {
        font-size: 12px;
        letter-spacing: 1px;
        text-align: left;
      }
    }
  }
  .others {
		width: 50%;
    .othercontent {
			display: flex;
			justify-content: space-evenly;
			ul{
				// width: 100px;
				list-style-type:none;
				li{
					text-align: left;
					margin-bottom: 2px;
				}
				li:first-child{
					margin-bottom: 6px;
					font-size: 16px;
					font-weight: 500;
				}
				li:not(:first-child){
					font-size: 12px;
				}
			}
    }
  }
}
</style>