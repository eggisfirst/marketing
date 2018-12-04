import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



export var router = new VueRouter({
  routes: [{
    path: '/',
    name: 'ReportForms',
    component: resolve => require(['../pages/ReportForms'], resolve)
  },{
    path: '/Login',
    name: 'Login',
    component: resolve => require(['../pages/login'], resolve)
  }, {
    /***报表模块***/
    path: '/brand',
    name: 'Brand',
    component: resolve => require(['../pages/charts/Brand/brand'], resolve)
  }, {  // 销售
    path: '/sales',
    name: 'Sales',
    component: resolve => require(['../pages/charts/Sales/sales'], resolve)
  },{
    path: '/areaStoreSales',
    name: '/AreaStoreSales',
    component: resolve => require(['../pages/charts/Sales/areaStoreSales'],resolve)
  },{
    path: '/storeSales',
    name: 'StoreSales',
    component: resolve => require(['../pages/charts/Sales/storeSales'], resolve)
  },{
    path: '/personalSales',
    name: '/PersonalSales',
    component: resolve => require(['../pages/charts/Sales/personalSales'],resolve)
  },{  // 铁三角
    path: '/audioTechnica',
    name: '/AudioTechnica',
    component: resolve => require(['../pages/charts/AudioTechnica/audioTechnica'],resolve)
  },{
    path: '/personal',
    name: '/Personal',
    component: resolve => require(['../pages/charts/AudioTechnica/personal'],resolve)
  },{
    path: '/areaEffectiveness',
    name: '/AreaEffectiveness',
    component: resolve => require(['../pages/charts/AreaEffectiveness/areaEffectiveness'],resolve)
  },{
    path: '/peopleWork',
    name: '/PeopleWork',
    component: resolve => require(['../pages/charts/PerCapita/PeopleWork'],resolve)
  },{
    path: '/customerSource',
    name: '/CustomerSource',
    component: resolve => require(['../pages/charts/Customer/customerSource'],resolve)
  },
  /**** 客户模块 ****/
  {
    path: '/customer',
    name: '/Customer',
    component: resolve => require(['../pages/customer'],resolve)
  },
  // {
  //   path: '/ReportForms',
  //   name: 'ReportForms',
  //   component: resolve => require(['../pages/ReportForms'], resolve)
  // },
  {
    path: '/dealDetails',
    name: '/dealDetails',
    component: resolve => require(['../pages/customer/dealDetails'],resolve)
    // meta:{keepAlive:true}
  },
  {
    path: '/trackDetails',
    name: '/trackDetails',
    component: resolve => require(['../pages/customer/trackDetails'],resolve)
  },
  /****个人模块****/
  {
    path: '/personalMsg',
    name: '/Personal',
    component: resolve => require(['../pages/Personal/personalMsg'],resolve)
  },
  {
    path: '/dailyPaper',
    name: '/dailyPaper',
    component: resolve => require(['../pages/Personal/dailyPaper'],resolve)
  },
  {
    path: '/ForgetPwd',
    name: '/ForgetPwd',
    component: resolve => require(['../pages/ForgetPwd'],resolve)
  },{
    path: '/ResetPwd',
    name: '/ResetPwd',
    component: resolve => require(['../pages/ResetPwd'],resolve)
  }]
})

