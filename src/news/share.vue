<template lang="html">
  <button type="button" name="button" class="sharebtn" @click='share'>分享</button>
</template>

<script>
export default {
    methods:{
      share(){
        this.$emit('shared')
      }
    }
}
</script>

<style lang="css" scoped>
  .sharebtn{width: 120px; height: 30px; background:#eee; font-size: 14px;text-align: center; line-height: 30px; color: #f00; cursor: pointer;display: block; margin: 20px auto;}
</style>
