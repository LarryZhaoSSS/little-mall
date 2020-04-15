<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderFooter from "@/components/OrderFooter";
import ServiceBar from "@/components/ServiceBar";
export default {
  name: "order",
  components: {
    OrderFooter,
    ServiceBar
  },
  data() {
    return {
      title: "",
      tip: ""
    };
  },
  mounted() {
    let path = this.$route.path;
    console.log(path);
    if (path === "/order/comfirm") {
      this.title = "订单确认";
      this.tip = "请认真填写收获地址 ";
    } else if (path === "/order/list") {
      this.title = "订单列表";
      this.tip = "请认真填写收获地址 ";
    } else if (path === "/order/pay") {
      this.title = "订单支付";
      this.tip = "请防止诈骗 ";
    }
  }
};
</script>

<style lang="scss" ></style>
