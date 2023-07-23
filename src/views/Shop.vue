<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">品項</th>
        <th scope="col">售價</th>
        <th scope="col">數量</th>
        <th scope="col">總價</th>
        <th scope="col">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in getstatecart">
        <th scope="row">{{ idx + 1 }}</th>
        <td>
          <p>{{ item.m.name }}</p>
          <p>{{ item.m.mark }}</p>
        </td>
        <td>{{ item.m.price }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.m.price * item.count }}</td>
        <td><i class="far fa-trash-alt"></i></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {};
  },
  computed: {
    getstatecart() {
      return this.$store.getters.getstatecart;
    },
  },
  methods: {},
  components: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  max-width: 1140px;
  margin: auto;
}
</style>