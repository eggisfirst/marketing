import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export var router = new VueRouter({
  routes: [{
    path: '/Login',
    name: 'Login',
    component: resolve => require(['../pages/login'], resolve)
  }, {
    path: '/brand',
    name: 'Brand',
    component: resolve => require(['../pages/brand'], resolve)
  }, {
    path: '/sales',
    name: 'Sales',
    component: resolve => require(['../pages/sales'], resolve)
  },{
    path: '/',
    name: 'Login2',
    component: resolve => require(['../pages/Login2'], resolve)
  },{
    path: '/ReportForms',
    name: 'ReportForms',
    component: resolve => require(['../pages/ReportForms'], resolve)
  },{
    path: '/storeSales',
    name: 'StoreSales',
    component: resolve => require(['../pages/storeSales'], resolve)
  },{
    path: '/ForgetPwd',
    name: '/ForgetPwd',
    component: resolve => require(['../pages/ForgetPwd'],resolve)
  },{
    path: '/ResetPwd',
    name: '/ResetPwd',
    component: resolve => require(['../pages/ResetPwd'],resolve)
  },{
    path: '/areaStoreSales',
    name: '/AreaStoreSales',
    component: resolve => require(['../pages/areaStoreSales'],resolve)
  },{
    path: '/areaEffectiveness',
    name: '/AreaEffectiveness',
    component: resolve => require(['../pages/AreaEffectiveness'],resolve)
  },{
    path: '/audioTechnica',
    name: '/AudioTechnica',
    component: resolve => require(['../pages/audioTechnica'],resolve)
  },{
    path: '/category',
    name: '/Category',
    component: resolve => require(['../pages/Category'],resolve)
  },{
    path: '/peopleWork',
    name: '/PeopleWork',
    component: resolve => require(['../pages/PeopleWork'],resolve)
  },{
    path: '/customerSource',
    name: '/CustomerSource',
    component: resolve => require(['../pages/CustomerSource'],resolve)
  }]
})