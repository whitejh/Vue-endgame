import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignUpPage from '@/views/SignUpPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // Code Spliting : url을 이동할 떄마다 필요한 자바스크립트 파일을 가져온다
    },
    {
      path: '/signup',
      component: () => import('@/views/SignUpPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// 라우터의 인스턴스가 생성되면서 현재 파일에서 밖으로 나간다. 이게 export의 역할
// default는 현재 파일에서 하나의 변수 혹은 함수가 나가는 것
