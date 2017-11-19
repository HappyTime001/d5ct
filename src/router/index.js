import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/views/index/index'
import None from '@/views/common/none'
import Page404 from '@/views/common/404'

import TransferList from '@/views/transfer/list'
import TransferDetails from '@/views/transfer/details'

import NewsList from '@/views/news/list'
import NewsDetails from '@/views/news/details'

import Signin from '@/views/account/signin'
import Signup from '@/views/account/signup'
import Forgot from '@/views/account/forgot'

import ProjectList from '@/views/project/list'
import ProjectDetails from '@/views/project/details'

import Notwx from '@/views/common/notwx'
import Bonus from '@/views/bonus/month'

import Contact from '@/views/aboutus/contact'
import Platform from '@/views/aboutus/platform'

//账户
import address from '@/views/user/address'
import apply from '@/views/user/apply'
import attention from '@/views/user/attention'
import balance from '@/views/user/balance'
import bank from '@/views/user/bank'

import contract from '@/views/user/contract'
import identity from '@/views/user/identity'
import info from '@/views/user/info'
import initiate from '@/views/user/initiate'
import investment from '@/views/user/investment'

import redpacket from '@/views/user/redpacket'
import safe from '@/views/user/safe'
import signature from '@/views/user/signature'
import user from '@/views/user/user'


Vue.use(Router)

export default new Router({
  routes: [
  	//首页
    {
      path: '/',			//http://m.d5ct.com/
      name: '首页',
      component: Index
    },
    //404
    {
      path: '/404',			//http://m.d5ct.com/454
      name: '首页',
      component: Page404
    },
/*任务分配一*/
    //转让模块路由
    {
      path: '/transfer',
      name: '',
      component: None,
      children: [
          { path: 'project', component: TransferList, name: '转让中心' },			//http://m.d5ct.com/transfer/project
          { path: 'project/:id', component: TransferDetails, name: '转让项目详情' }	//http://m.d5ct.com/transfer/project/3719
      ]
    },

    //资讯模块路由  
    {
      path: '/news',
      name: '',
      component: None,
      children: [
          { path: 'platform', component: NewsList, name: '平台资讯' },		//http://m.d5ct.com/news/platform
          { path: 'article/:id', component: NewsDetails, name: '资讯详情' }	//http://m.d5ct.com/article/3655
      ]
    },

    //账户模块路由  
    {
      path: '/account',
      name: '',
      component: None,
      children: [
          { path: 'signin', component: Signin, name: '登录' },  	//http://m.d5ct.com/account/signin
          { path: 'signup', component: Signup, name: '注册' },	//http://m.d5ct.com/account/signup
          { path: 'forgot', component: Forgot, name: '忘记密码' }, //http://m.d5ct.com/account/forgot
      ]
    },

    //项目模块路由  
    {
      path: '/project',	//http://m.d5ct.com/project
      name: '项目列表',
      component: ProjectList,
    },

    {
      path: '/project/:id',	//http://m.d5ct.com/project/408
      name: '项目详情',
      component: ProjectDetails,
    },
     //分红模块路由  
    {
      path: '/bonus',
      name: '',
      component: None,
      children: [
          { path: 'month', component: Bonus, name: '月份分红列表' },  	//http://m.d5ct.com/bonus/month
         
      ]
    },
/*任务分配一 end*/


/*任务分配二*/
    //账户模块路由  
    {
      path: '/user',
      name: '',
      component: None,
      redirect: '/user/user',
      children: [
          { path: 'user', component: user, name: '会员中心' },  			//http://m.d5ct.com/user
          { path: 'info', component: info, name: '个人资料' },				//http://m.d5ct.com/user/info
          { path: 'balance', component: balance, name: '我的余额' }, 			//http://m.d5ct.com/user/balance
          { path: 'investment', component: investment, name: '我的投资' },		//http://m.d5ct.com/user/investment
          { path: 'apply', component: apply, name: '我的转让列表' }, 		//http://m.d5ct.com/user/apply

          { path: 'attention', component: attention, name: '我的关注' },  		//http://m.d5ct.com/user/attention
          { path: 'czc/initiate', component: initiate, name: '我的团购' },		//http://m.d5ct.com/user/czc/initiate
          { path: 'binding/identity', component: identity, name: '身份认证' }, //http://m.d5ct.com/user/binding/identity
          { path: 'bank', component: bank, name: '银行卡' },				//http://m.d5ct.com/user/bank
          { path: 'redpacket', component: redpacket, name: '我的投资劵' }, 		//http://m.d5ct.com/user/redpacket

          { path: 'safe', component: safe, name: '修改交易密码' },  		//http://m.d5ct.com/user/safe
          { path: 'address', component: address, name: '我的地址' },			//http://m.d5ct.com/user/address
          { path: 'contract', component: contract, name: '我的合同列表' }, 	//http://m.d5ct.com/user/contract
          { path: 'signature', component: signature, name: '签章列表' },		//http://m.d5ct.com/user/signature
         

      ]
    },
    //no微信模块路由  
    {
      path: '/notwx',					//http://m.d5ct.com/notwx
      name: '请使用微信打开页面',
      component: Notwx,
    },
/*任务分配二 end*/
   
    //联系我们模块路由  
    {
      path: '/aboutus',
      name: '',
      component: None,
      children: [
          { path: 'contact', component: Contact, name: '联系我们' },  	//http://m.d5ct.com/aboutus/contact
          { path: 'platform', component: Platform, name: '平台介绍' },  	//http://m.d5ct.com/aboutus/platform
         
      ]
    },

    { path: '*', redirect: '/404',  name: '找不到页面'}
  ]
})
