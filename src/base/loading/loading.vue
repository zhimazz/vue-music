<template>
  <div class="loading">
    <img src="./loading.gif" width="24" height="24">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    title: {
      type: String,
      default: '正在加载中...'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .loading
    width 100%
    text-align center
    .desc
      font-size $font-size-small
      line-height 20px
      color $color-text-l
</style>