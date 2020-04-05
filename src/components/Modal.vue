<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">取消</a>
          <a href="javascript:;" class="btn btn-default">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalType: {
      type: String,
      default: "form"
    },
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelTexxt: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>

<style lang="scss" scoped>
</style>