<template>
  <div class="footer">
    <ul @click="onclick">
      <li id="1">    
      <!-- <router-link to="/" >  -->
      <div class='iconHome'></div>
      <p class="iconCharP">首页</p>
      <!-- </router-link> -->
    </li>
    <li id="2">  
      <router-link to="/ReportForms" >
      <div class="iconChar"></div>
      <p class="iconCharP">报表</p>  
      </router-link>
    </li>
    <li id="3">
      <!-- <router-link to="/" > -->
       <div class="iconSalary" ></div>
      <p class="iconCharP">财务</p>
      <!-- </router-link> -->
    </li>
    <li id="4">
      <!-- <router-link to="/" > -->
       <div class="iconMsg" ></div>
      <p class="iconCharP">消息</p>
      <!-- </router-link> -->
    </li>
    <li id="5">
      <!-- <router-link to="/" > -->
       <div class="iconPerson" ></div>
      <p class="iconCharP">个人</p>
      <!-- </router-link> -->
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
      
    }
  },
  created(){
    
  },
  methods:{
    onclick:function(e){
      console.log(e.path[1].id)
      if(e.path[1].id){
        alert('该模块尚未开发')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  width: 100vw;
  height: 22vw;
  position: fixed;
  bottom: 0;
  background: #f8f8f8;
  ul{
    display: flex;
    justify-content: space-around; 
    li{
      margin-top: 2vw;
      .iconHome{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon1.png) no-repeat center;
        background-size: 100%
      }
      .iconChar{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon2.png) no-repeat center;
        background-size: 100%
      }
      .iconSalary{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon3.png) no-repeat center;
        background-size: 100%
      }
      .iconMsg{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon4.png) no-repeat center;
        background-size: 100%
      }
      .iconPerson{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon5.png) no-repeat center;
        background-size: 100%
      }
      p{
        color: #8e8e93;
        font-size: 2.4vw;
        text-align: center;
      }
      //路由生效时候样式图片改变
      .router-link-exact-active .iconHome{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon-active1.png) no-repeat center;
        background-size: 100%
      }
      .router-link-exact-active .iconChar{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon-active2.png) no-repeat center;
        background-size: 100%;
      }
      .router-link-exact-active .iconCharP{
        color: #007aff;
        font-size: 2.4vw;
        text-align: center;
      }
      .router-link-exact-active .iconSalary{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon-active3.png) no-repeat center;
        background-size: 100%
      }
      .router-link-exact-active .iconMsg{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon-active4.png) no-repeat center;
        background-size: 100%
      }
      .router-link-exact-active .iconPerson{
        width: 6.6vw;
        height: 6.6vw; 
        margin-bottom: 1.33vw;
        background: url(../assets/imgs/icon-active5.png) no-repeat center;
        background-size: 100%
      }
    }
  }
}


</style>
