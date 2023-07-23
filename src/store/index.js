import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    data:{},
    user:{
      "id": 0,
			"name": "Jean",
			"mark": "測試",
			"price": "無價"
    },
    cart:[],
  },
  mutations: {
    setData(state,res){
      state.data = res
    },
    userclick(state,obj){
      state.user = obj
    },
    joincart(state,obj){
      state.cart.push(obj)
    }
  },
  actions: {
    getJSON(context){
      axios.get('/static/demo.json').then((res)=>{
        console.log(res.data);
        context.commit('setData',res.data)
      })
    }
  },
  modules: {},
  getters:{
    getstatecart(state){
      return state.cart
    }
  }
});
