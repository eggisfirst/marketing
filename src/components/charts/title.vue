<!-- <keep-alive> -->
<template>
  <div class="title">
    <h3 class="chartsTit">{{text}}</h3>
    <h6>单位：万</h6>
  </div>
</template>
<!-- </keep-alive> -->

<script>
import Vue from 'vue'
export default {
  name: 'chartsTit',
  props: ['text'],
  data () {
    return {

    }
  },
  beforeMount() {

  },
  mounted() {

  },
  updated() {

  },
  watch: {
    data(val){
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .title{
    margin: 0 2vw;
    h6{
      padding-left: 3vw;
      font-size: 14px;
      line-height: 2em;
      color: #909090;
      margin-top: -20px;
    }
  }
  .chartsTit{
    position: relative;
    font-size: 22px;
    line-height: 3em;
    padding-left: 3vw;
  }
  .chartsTit::after{
    display: block;
    content: '';
    position: absolute;
    top: 22px;
    left: 0;
    width: .5vw;
    height: 22px;
    background: #000;
  }
</style>